import { getErrorMessage } from "@/utils/errors";
import { NextRequest, NextResponse } from "next/server";
import { GoogleNews, googleNewsJson } from "@/lib/postAutomation/googleNews";
import { googleGeminiAi } from "@/lib/postAutomation/googleGeminiAi";
import crypto from "node:crypto";

/////////////////////////

/////////////////////////
import {
  getBlogPrompt,
  getTopicsScorePrompt,
} from "@/lib/postAutomation/prompts/features/readAndReplaceTxt";
import {
  TopicScoreJSONSchema,
  TopicScoreZodSchema,
  topicScoreZodSchema,
} from "@/lib/zodDefinations/geminiSchemas/topicScoreSchema";
import { geminiBlogJSONSchema } from "@/lib/zodDefinations/geminiSchemas/geminiBlogSchema";
import { parseAiBlogContent } from "@/lib/postAutomation/prompts/features/parseAiArticle";
import { promptToImageUrl } from "@/lib/postAutomation/prompts/features/promptToImageUrl";
import clientPromise from "@/lib/dbConnect";
import DraftSchema from "@/lib/zodDefinations/DraftSchema";
import { ObjectId } from "mongodb";
import { sendBlogAutomationNotification } from "@/lib/mail";
import { rateLimit } from "@/lib/rateLimit";
import rateLimitHandler from "@/lib/rateLimitHandler";

const findTopTopic = (topics: TopicScoreZodSchema) => {
  return topics.reduce((pre, curr) => {
    if (pre.overallScore < curr.overallScore) {
      pre = curr;
    }

    return pre;
  }, topics[0]);
};

export async function GET(request: NextRequest) {
  try {
    await rateLimitHandler();
    // authorization
    const authHeader = request.headers.get("authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return NextResponse.json(
        { status: "error", message: "Unauthorized" },
        { status: 401 },
      );
    }
    console.log("authheader:", authHeader);

    const authKey = authHeader.slice(7);
    const myAuthKey = process.env.CRON_SECRET;

  
    
    if (!myAuthKey) {
      return NextResponse.json(
        { status: "error", message: "cron_secret missing in env file." },
        { status: 500 },
      );
    }
      console.log("authkey:", authKey);
    console.log("myAuthKey:", myAuthKey);
    console.log("authKeyLength", authKey.length);
    console.log("authKeyLength", myAuthKey.length);

    const authKeyBuffer = Buffer.from(authKey);
    const myAuthKeyBuffer = Buffer.from(myAuthKey);

    if (
      authKeyBuffer.length != myAuthKeyBuffer.length ||
      !crypto.timingSafeEqual(authKeyBuffer, myAuthKeyBuffer)
    ) {
      return NextResponse.json(
        { status: "failed", message: "Something went wrong." },
        { status: 401 },
      );
    }
////////////////////////////////Authorization done///////////////
    // step1. get latest hot news topics
    const googleNews: GoogleNews[] = (await googleNewsJson()) as GoogleNews[];
    // step2. send to genai score it on bases of trendscore , usefulness

    const interaction = await googleGeminiAi(
      await getTopicsScorePrompt(googleNews),
      {
        type: "text",
        mime_type: "application/json",
        schema: TopicScoreJSONSchema,
      },
    );

    const geminiResponse = JSON.parse(interaction.output_text as string);

    const result = topicScoreZodSchema.safeParse(geminiResponse);

    if (!result.success) {
      return NextResponse.json(
        { status: "warning", message: result.error.message },
        { status: 401 },
      );
    }

    // step3. choose top overallscore topic
    const topTopic = findTopTopic(result.data);
    // step4. get blog prmpt
    const blogPrompt = await getBlogPrompt(topTopic.topic);

    //step5. write blog with genai
    const blogInteraction = await googleGeminiAi(blogPrompt, {
      type: "text",
      mime_type: "application/json",
      schema: geminiBlogJSONSchema,
    });

    const blogResult = geminiBlogJSONSchema.safeParse(
      JSON.parse(blogInteraction.output_text as string),
    );

    if (!blogResult.success) {
      return NextResponse.json({
        status: "warning",
        message: blogResult.error.message,
      });
    }

    const content = await parseAiBlogContent(blogResult.data.article_markdown);
    const hero_post_image_url = process.env.HERO_IMAGE_POST_AI;
    // get user by email
    const client = await clientPromise;
    const UserCollection = client.db("blogz").collection("users");

    const user = await UserCollection.findOne(
      { email: process.env.OWNER_EMAIL },
      { projection: { _id: 1 } },
    );

    if (!user) {
      return NextResponse.json(
        {
          status: "failed",
          message: "Owner account not found.",
        },
        { status: 401 },
      );
    }
    ////

    // final draft schema validation
    const { data: blog } = blogResult;
    console.log("content:", content.content);

    const draft = DraftSchema.safeParse({
      userId: user._id.toString(),
      title: blog.title,
      banner: hero_post_image_url,
      topics: blog.tags,
      description: blog.description,
      content: content.content,
      source: "Google Ai",
    });

    if (!draft.success) {
      return NextResponse.json(
        { status: "failed", message: draft.error.message },
        { status: 422 },
      );
    }
    //////
    const draftCollection = client.db("blogz").collection("drafts");
    const newDraft = await draftCollection.insertOne({
      ...draft.data,
      userId: new ObjectId(draft.data.userId),
      date: new Date(),
    });

    if (!newDraft.insertedId) {
      throw new Error("Database insertone query failed for draft.");
    }
    /// Notify owner by email
    await sendBlogAutomationNotification(
      process.env.OWNER_EMAIL as string,
      draft.data.title,
    );
    return NextResponse.json(
      { status: "ok", message: "New blog added by automation." },
      { status: 200 },
    );
  } catch (err) {
    const message = getErrorMessage(err);
    console.log("error:", message);
    return NextResponse.json({ status: "error", message }, { status: 500 });
  }
}

import { getErrorMessage } from "@/utils/errors";
import { NextRequest, NextResponse } from "next/server";
import { GoogleNews, googleNewsJson } from "@/lib/postAutomation/googleNews";
import { googleGeminiAi } from "@/lib/postAutomation/googleGeminiAi";
/////////////////////////
import { marked } from "marked";
import { generateJSON } from "@tiptap/html";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
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

    const html = await marked.parse(blogResult.data.article_markdown);
    const content = generateJSON(html, [StarterKit, Image]);
    return NextResponse.json(
      { status: "ok", result: blogResult.data },
      { status: 200 },
    );
  } catch (err) {
    const message = getErrorMessage(err);
    console.log("error:", message);
    return NextResponse.json({ status: "error", message }, { status: 500 });
  }
}

import { getErrorMessage } from "@/utils/errors";
import { NextRequest, NextResponse } from "next/server";
import { GoogleNews, googleNewsJson } from "@/lib/postAutomation/googleNews";
import { googleGeminiAi } from "@/lib/postAutomation/googleGeminiAi";
import { getBlogPrompt, getTopicsScorePrompt } from "@/lib/postAutomation/prompts/features/readAndReplaceTxt";
import { title } from "process";
import { TopicScoreJSONSchema, TopicScoreZodSchema, topicScoreZodSchema } from "@/lib/zodDefinations/geminiSchemas/topicScoreSchema";


const findTopTopic = (topics:TopicScoreZodSchema)=>{
   return topics.reduce((pre, curr)=>{
      if(pre.overallScore < curr.overallScore){
         pre = curr;
      }

      return pre;
   }, topics[0])
}

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
    )


    const geminiResponse = JSON.parse(interaction.output_text as string);
    const result =  topicScoreZodSchema.safeParse(geminiResponse);

    if(!result.success){
        return NextResponse.json({status:"warning", message:result.error}, {status:401});
    }

    // step3. choose top overallscore topic
    const topTopic = findTopTopic(result.data);
    // step4. get blog prmpt
    const blogPrompt = await getBlogPrompt(topTopic.topic);
     console.log("blogPrompt:", blogPrompt);
    //step5. write blog with genai
    // const interaction1 = await googleGeminiAi(blogPrompt, {type:"text"});
     
    return NextResponse.json({ status: "ok"}, { status: 200 });
  } catch (err) {
    const message = getErrorMessage(err);
    console.log("error:", message);
    return NextResponse.json({ status: "error", message }, { status: 500 });
  }
}

import { GoogleGenAI } from "@google/genai";
import z from "zod";
import { TopicScoreJSONSchema } from "../zodDefinations/geminiSchemas/topicScoreSchema";


interface ResponseFormat{
  type:string;
  mime_type?:string;
  schema?:Object
}

export async function googleGeminiAi(text: string, response_format:ResponseFormat) {
  const ai = new GoogleGenAI({ apiKey: process.env.GIMINI_AI_API_KEY });
  const interaction = await ai.interactions.create({
    model: "gemini-3.1-flash-lite",
    input: text,
    response_format
  });

  return interaction;
}

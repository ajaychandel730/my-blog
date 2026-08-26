import { GoogleGenAI } from "@google/genai";
import sharp from "sharp";



export async function nanoBanana(prompt:string) {

  const ai = new GoogleGenAI({apiKey:process.env.GIMINI_AI_API_KEY});

  const interaction = await ai.interactions.create({
    model: "gemini-3.1-flash-lite-image",
    input: prompt,
  });

   return interaction;
}

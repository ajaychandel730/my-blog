import OpenAI from "openai";

export async function openaiImage(prompt:string) {
  const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_API_KEY,
  });

  const response = await openai.responses.create({
    model: "gpt-5.6",
    input: prompt,
    tools: [{ type: "image_generation" }],
  });

  const imageData = response.output
    .filter((output) => output.type === "image_generation_call")
    .map((output) => output.result);

  if (imageData.length > 0) {
    return imageData[0];
  } else {
    throw new Error("Openai failed to genrate image.");
  }
}

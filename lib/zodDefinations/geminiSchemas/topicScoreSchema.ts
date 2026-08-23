import z from "zod";

export const TopicScoreJSONSchema = {
  type: "array",
  items: {
    type: "object",
    properties: {
      topic: {
        type: "string",
      },
      trendScore: {
        type: "number",
      },
      usefulness: {
        type: "number",
      }
    },
  },
};

export const topicScoreZodSchema= z.array(
    z.object({
        topic : z.string(),
        trendScore:z.number(),
        usefulness:z.number(),
    }).transform((topic)=>{
         const overallScore = (topic.trendScore * 0.4) + (topic.usefulness * 0.6);
         return {
          ...topic,
          overallScore,
         }
    })
);

// To extract the TypeScript type from the schema:
export type TopicScoreZodSchema = z.infer<typeof topicScoreZodSchema>;
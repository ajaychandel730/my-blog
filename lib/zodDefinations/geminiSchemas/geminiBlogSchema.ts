import { title } from "process";
import z from "zod";


export const geminiBlogJSONSchema = z.object({
  title : z.string(),
  description:z.string(),
  tags:z.array(z.string()),
  hero_image_prompt:z.string(),
  article_markdown:z.string(),
});

export type GeminiBlogJSONSchema = z.infer<typeof geminiBlogJSONSchema>; 
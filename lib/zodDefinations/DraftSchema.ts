import { z } from "zod";
import cleanTag from "../cleanTag";

export default z.object({
  userId: z.string(),
  title : z.string().min(3, {message : "Title must contain at least 3 characters."}),
  banner : z.string().url({message : "Blog banner must be required."}),
  topics : z.array(z.string().transform((val)=>cleanTag(val))),
  description : z.string().max(300, { message : "Description must contain at most 300 characters."}),
  content : z.array(z.unknown()),
  source:z.optional(z.string()),
});

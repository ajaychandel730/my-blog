import { z } from "zod";
import cleanTag from "../cleanTag";

export default z.object({
  userId: z.string(),
  title : z.string().max(64).min(3, {message : "Title must contain at least 3 characters."}),
  banner : z.string().url({message : "Blog banner must be required."}),
  topics : z.array(z.string()),
  description : z.string().max(300, { message : "Description must contain at most 300 characters."}),
  content : z.array(z.unknown())
});
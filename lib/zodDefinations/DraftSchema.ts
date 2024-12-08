import { z } from "zod";

export default z.object({
  title: z
    .string()
    .max(64)
    .min(3, { message: "Title must contain at least 3 characters." }),
  banner: z.string().refine(
    (val) => {
      // Check if the string is empty or a valid URL
      if (val === "" || /^[a-zA-Z]+:\/\//.test(val)) {
        return true;
      }
      return false;
    },
    {
      message: "Must be an empty string or a valid URL",
    }
  ),
  topics: z.array(z.string()),
  description: z.string(),
  content: z.array(z.unknown()),
});
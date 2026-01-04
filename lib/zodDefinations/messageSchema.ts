import { z } from "zod";

const emailPattern =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]{1,64}@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;

export const MessageSchema = z.object({
  email: z
    .string()
    .email()
    .max(254, "Email must be less than [254] characters.")
    .refine((email) => emailPattern.test(email), {
      message: "Please enter valid email.",
    }),
  name: z
    .string()
    .min(3, "Name must be between [3-30] character long.")
    .max(30, "Name must be between [3-30] character long."),
  subject: z.string().max(100, "Subject must be between [0-100] long."),
  text: z.string().max(300, "Your text must be [0-300] character long."),
});

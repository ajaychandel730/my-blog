import { z } from "zod";

const GMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

export const emailSchema = z.object({
  email: z
    .string()
    .email()
    .refine((email) => GMAIL_REGEX.test(email), {
      message: "Only Gmail addresses are allowed",
    }),
});

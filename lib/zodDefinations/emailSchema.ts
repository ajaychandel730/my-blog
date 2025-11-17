import { z } from "zod";

export const emailSchema = z.object({
  email: z
    .string()
    .email()
    .refine((email) => email.endsWith("@gmail.com"), {
      message: "Only Gmail addresses are allowed",
    }),
});

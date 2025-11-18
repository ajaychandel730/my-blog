import {z} from "zod";

export const password_otpSchema = z.object({
    userId : z.string(),
    otp : z.string().length(6, "OTP must be 6 digits")
});
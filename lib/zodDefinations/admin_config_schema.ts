import z from "zod";

export enum GoogleGmailServiceEnum{
  GOOGLE_GMAIL="google_gmail",
};

export const adminConfigSchema = z.object({
    service:z.enum([GoogleGmailServiceEnum.GOOGLE_GMAIL]),
    email:z.string().email({message:"Invalid email address."}).refine((email)=> email.endsWith("@gmail.com"), {message:"Only Gmail address allowed."}),
    refreshToken:z.string({required_error:"Refresh token must be required"}).min(1, "Refresh token cannot be empty."),
    expiryDate:z.number({required_error:"Expiry date must be required"}).positive("Expiry date must be a positive timestamp"),
    created_At:z.date()
});



export type AdminConfigSchema = z.infer<typeof adminConfigSchema>;
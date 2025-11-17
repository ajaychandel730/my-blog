"use server";
import client from "@/lib/dbConnect";
import { sendOTPEmail } from "@/lib/mail";
import { generateOTP, hashOTP } from "@/lib/otp";
import { emailSchema } from "@/lib/zodDefinations/emailSchema";
import { getErrorMessage } from "@/utils/errors";
import { redirect } from "next/navigation";


export default async function name(initialState: unknown, formData: FormData) {
 let userId;
 const email:string = formData.get("email")?.toString() || "";

  try {
    const result = emailSchema.safeParse({ email});

    if (!result.success) {
      return {
        status: 400,
        error: result.error.format().email?._errors[0],
      };
    }

    const collection = client.db("blogz").collection("users");
    const user = await collection.findOne({ email: result.data.email });
    
    if (!user) {
      return {
        status: 400,
        error: "User not found on this email.",
      };
    }

    // send otp to user gmail
    const myOtp = generateOTP(6);
    const hashMyOtp = hashOTP(myOtp);
    await sendOTPEmail(email, myOtp);
    
    const otpsCollection = client.db("blogz").collection('otps');

    const  otpDoc = otpsCollection.insertOne({
      email : email,
      otp : hashMyOtp,
      expries_at : new Date(Date.now() + (5 * 60 * 1000)),
      created_at : new Date()
    });
     
    console.log("after add otp:", otpDoc);
    
  } catch (err) {
    console.log("error:", getErrorMessage(err));
    return {
      status: 500,
      error: "Something went wrong.",
    };
  }
  
 redirect(`/Forgot-password/Verify_otp/${email}`);
}

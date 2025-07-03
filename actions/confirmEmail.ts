"use server";
import client from "@/lib/dbConnect";
import {signupSchema } from "@/lib/zodDefinations/userSchema";
import { getErrorMessage } from "@/utils/errors";
import { ObjectId } from "mongodb";
import { redirect } from "next/navigation";


const emailSchema = signupSchema.pick({
  email : true,
});

export default async function name(initialState: unknown, formData: FormData) {
 let userId;
  try {
    const result = emailSchema.safeParse({ email: formData.get("email") });

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

    userId = user._id.toString();

  } catch (err) {
    console.log("error:", getErrorMessage(err));
    return {
      status: 500,
      error: "Something went wrong.",
    };
  }

 redirect(`/Forgot-password/ResetPassword/${userId}`);
}

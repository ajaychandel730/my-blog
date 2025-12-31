"use server";
import { verifyHashCode } from "@/lib/otp";
import { password_otpSchema } from "@/lib/zodDefinations/password_otpSchema";
import { getErrorMessage } from "@/utils/errors";
import { ObjectId } from "mongodb";
import { redirect } from "next/navigation";
import { signResetToken } from "@/lib/jose";
import { cookies } from "next/headers";
import clientPromise from "@/lib/dbConnect";
import rateLimitHandler from "@/lib/rateLimitHandler";

export default async function (preState: unknown, formData: FormData) {
  const { userId, otp } = Object.fromEntries(formData.entries());
  let _id;
  try {
    // limiting
     await rateLimitHandler();
    //

    const result = password_otpSchema.safeParse({
      userId,
      otp,
    });

    if (!result.success) {
      return {
        status: 400,
        error: result.error.flatten().fieldErrors,
      };
    }
    const client = await clientPromise;
    const otpsColl = client.db("blogz").collection("otps");
    const objectId = new ObjectId(userId as string);
    const findDoc = await otpsColl.findOne({ _id: objectId });

    if (!findDoc) {
      new Error("something went wrong.");
    }
  
    // verify otp
    if (!verifyHashCode(otp as string, findDoc?.code)) {
      return {
        status: 400,
        error: "Invalid OTP. Please enter again.",
      };
    }
    // verify email
    const userColl = client.db("blogz").collection("users");
    const user = await userColl.findOne(
      { email: findDoc?.email },
      { projection: { _id: 1 } }
    );

    if (!user) {
      new Error();
    }

    // create token with jose
    const min = 10;
    const token = await signResetToken({ id: user?._id.toString()! }, min);

    (await cookies()).set("reset_token", token, {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      sameSite: "strict",
      path: "/forgot_password",
      maxAge: min * 60,
    });
  } catch (err) {
    console.log("error:", getErrorMessage(err));
    return {
      status: 500,
      error: "Something went wrong.",
    };
  }

  redirect(`/forgot_password/reset_password/${Date.now()}`);
}

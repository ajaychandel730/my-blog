"use server";
import { sendOTPEmail } from "@/lib/mail";
import { generateOTP, hashOTP } from "@/lib/otp";
import { emailSchema } from "@/lib/zodDefinations/emailSchema";
import { getErrorMessage } from "@/utils/errors";
import { redirect } from "next/navigation";
import clientPromise from "@/lib/dbConnect";
import rateLimitHandler from "@/lib/rateLimitHandler";

export default async function name(initialState: unknown, formData: FormData) {
  // limiting
   await rateLimitHandler();
  //
  let userId;
  try {
    const email: string = formData.get("email")?.toString() || "";
    const result = emailSchema.safeParse({ email });
    const client = await clientPromise;
  const session = client.startSession();


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
    console.log("genrate otp after", myOtp);
    const hashMyOtp = hashOTP(myOtp);

    // start session
    await session.withTransaction(async () => {
      const otpsCollection = client.db("blogz").collection("otps");

      const otpDoc = await otpsCollection.insertOne({
        email: email,
        code: hashMyOtp,
        expires_at: new Date(Date.now() + 300000),
        created_at: new Date(),
      });

      await sendOTPEmail(email, myOtp);
      userId = otpDoc.insertedId.toString();
    });
    //end session
  } catch (err) {
  //  console.log(
  //   "GMAIL ERROR:",
  //   JSON.stringify(err?.response?.data, null, 2)
  // );

  // console.log(
  //   "GMAIL RESPONSE:",
  //   JSON.stringify(err?.response, null, 2)
  // );
    console.log("error on forgot password confirm email:", getErrorMessage(err));
    return {
      status: 500,
      error: "Something went wrong.",
    };
  }

  redirect(`/admin/forgot_password/verify_otp/${userId}`);
}

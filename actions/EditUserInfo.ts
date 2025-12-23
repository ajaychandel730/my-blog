"use server";
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/options";
import clientPromise from "@/lib/dbConnect";
import rateLimitHandler from "@/lib/rateLimitHandler";
import { UserEditSchema } from "@/lib/zodDefinations/userSchema";
import { getErrorMessage } from "@/utils/errors";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";

export default async function (state: any, formData: FormData): Promise<any> {
  try {
    // rate limit
    await rateLimitHandler();
    const session = await getServerSession(nextAuthOptions);

    if (!session || !ObjectId.isValid(session?.user?.id + "")) {
      return {
        status: "error",
        message: "Your session is no longer valid. Please sign in again.",
      };
    }

    await rateLimitHandler();
    const result = UserEditSchema.safeParse({
      email: formData.get("email"),
      name: formData.get("name"),
      image: formData.get("image"),
    });

    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      return {
        status: "error",
        errors,
      };
    }

    const { email, name, image } = result.data;
    const client = await clientPromise;
    const userCollection = client.db("blogz").collection("users");
    const objectId =  new ObjectId(session.user.id);
    
    const user = await userCollection.updateOne(
      { _id: objectId },
      {
        $set: { email, name, image },
      }
    );

    if (user.matchedCount == 0) {
      return {
        status: "error",
        message: "User not found.",
      };
    }
    
    if (user.modifiedCount > 0) {
      return {
        status: "ok",
        message: "Profile updated successfully.",
        user : {name, email, image}
      };
    }

    return {
      status: "error",
      message: "Please edit profile before save.",
    };
  } catch (err) {
    console.log("Error in edit user:", getErrorMessage(err));

    return {
      status: "error",
      message: "Somthing went wrong. Please try later.",
    };
  }
}

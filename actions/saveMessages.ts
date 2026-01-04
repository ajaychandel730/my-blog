"use server";
import clientPromise from "@/lib/dbConnect";
import rateLimitHandler from "@/lib/rateLimitHandler";
import { MessageSchema } from "@/lib/zodDefinations/messageSchema";
import { getErrorMessage } from "@/utils/errors";

export default async function (formData: FormData) {
  try {
    // rate limitor
     await rateLimitHandler();
    // verify zod schema
    const result =  MessageSchema.safeParse({
        name : formData.get("name"),
        email : formData.get("email"),
        subject : formData.get("subject"),
        text : formData.get("text")
    })

    if(!result.success){
        return {
            status : "error",
            errors : result.error.flatten().fieldErrors
        }
    }
    
    // save message
    const client = await clientPromise;
    const MessageCollection = client.db("blogz").collection("messages");
    
    const message = await MessageCollection.insertOne({
        ...result.data,
        expries_at : new Date(Date.now() + 604800000),
        created_at : new Date()
    })

    // send feedback
    return {
        status : "ok",
        message : "Thank you! Your message has been sent successfully."
    }
  } catch (err) {
    console.log("message Error:", getErrorMessage(err));
    return {
      status: "error",
      message: "Somthing went wrong. Please try later.",
    };
  }
}

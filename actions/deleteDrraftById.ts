"use server";
import { ObjectId } from "mongodb";
import { getErrorMessage } from "@/utils/errors";
import clientPromise from "@/lib/dbConnect";
import rateLimitHandler from "@/lib/rateLimitHandler";
import requireAdmin from "@/lib/auth/requireAdmin";

export default async function (draftId: string) {
  try {
    // limiting
     await rateLimitHandler();
    //
     const authdata = await requireAdmin();

     if(authdata.status !== "ok"){
        return authdata;
     }

     const {session} = authdata;

    const client = await clientPromise;
    const blogCollection = client.db("blogz").collection("drafts");

    const result = await blogCollection.deleteOne({
      _id: new ObjectId(draftId),
      userId : new ObjectId(session.user.id),
    });

    if (result.deletedCount > 0) {
      return { status: "ok", message: "Your draft has been removed." };
    } else {
      return { status: "failed", message: "Draft not found." };
    }
  } catch (err) {
    console.error(getErrorMessage(err));
    return {
      status: "error",
      message: "Something went wrong. Unable to delete the Draft.",
    };
  }
}

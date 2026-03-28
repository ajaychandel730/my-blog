import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/options";
import clientPromise from "@/lib/dbConnect";
import rateLimitHandler from "@/lib/rateLimitHandler";
import { UserRole } from "@/types/user";
import { getErrorMessage } from "@/utils/errors";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";


export async function DELETE(req:NextRequest ,  { params }: { params: Promise<{ id: string }> }) {
  try{
    await rateLimitHandler();
    const {id} = await params;
    const session = await getServerSession(nextAuthOptions);

    if(!session || session.user.role !== UserRole.ADMIN){
      return NextResponse.json({
        status : "unauthorised",
        message : "You dont have permission to do this action."
      }, {status : 401});
    }

    const client = await clientPromise;
   const MessageColl = client.db("blogz").collection("messages");
   const message = await MessageColl.deleteOne({_id : new ObjectId(id)});

   if(message.deletedCount  < 1){
     return NextResponse.json({
      status : "error",
      message : "Not able to find message."
     }, {status:404});
   }


    return NextResponse.json({
        status : "ok",
        message : "Message removed successfully 😊"
    }, {status:200});

  }catch(err){
    console.log("delete Feedback error:", getErrorMessage(err));
    return NextResponse.json({
        status : "error",
        message : "Somthing went wrong."
    }, {status : 500});
  } 
}

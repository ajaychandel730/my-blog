
import client from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import { User } from "@/lib/types";


export async function POST(req:Request){
    try {
        const {email} = await req.json();
        const db = client.db("blogsz");
        const userCollection = db.collection("users");
        const userDoc = await userCollection.findOne({ email });
        const user: User = {
          _id: userDoc?._id.toString() || "",
          email: userDoc?.email || "",
          password: userDoc?.password || "",
        };
        return NextResponse.json({status : "ok", user}, {status : 200});
      } catch (err: unknown) {
        return NextResponse.json({status : "error", user : null});
      }
}
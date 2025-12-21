import { NextResponse } from "next/server";
import clientPromise from "@/lib/dbConnect";


export async function POST(req:Request){
    try {
        const {email} = await req.json();
        const client = await clientPromise;
        const db = client.db("blogsz");
        const userCollection = db.collection("users");
        const userDoc = await userCollection.findOne({ email });
        const user = {
          _id: userDoc?._id.toString() || "",
          email: userDoc?.email || "",
          password: userDoc?.password || "",
        };
        return NextResponse.json({status : "ok", user}, {status : 200});
      } catch (err: unknown) {
        return NextResponse.json({status : "error", user : null});
      }
}
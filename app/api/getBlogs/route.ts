import { getErrorMessage } from "@/utils/errors";
import { NextResponse, type NextRequest } from "next/server";
import clientPromise from "@/lib/dbConnect";
import rateLimitHandler from "@/lib/rateLimitHandler";

export async function GET(request: NextRequest) {
  try {
    // limiting
     await rateLimitHandler();
    //
    const { searchParams } = request.nextUrl;
    const page = Number(searchParams.get("page"));
    const limit = Number(searchParams.get("limit"));
    
    if(isNaN(page) || isNaN(limit) || page < 1 || limit < 1){
       return NextResponse.json({
        status : "error",
        message : "You missed the page and limit parameters.",
      }, {status : 400})
    }

    if(limit > 25){
      return NextResponse.json({
        status : "error",
        message : "You cross the page limit."
      }, {status : 400})
    }
    const client = await clientPromise;
    const blogsColl = client.db("blogz").collection("blogs");
    const reqBlogs = await blogsColl.find({}, { skip: (page - 1) * limit, limit })
      .toArray();
    return NextResponse.json({ status: "ok", result: reqBlogs }, { status: 200 });
  } catch (err) {
    console.log("error Message: ", getErrorMessage(err));
    return NextResponse.json({
      status: "error",
      message: "Server side error. Please try later.",
    }, {status : 500});
  }
}

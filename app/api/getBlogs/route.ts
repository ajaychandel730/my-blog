import client from "@/lib/dbConnect";
import { getErrorMessage } from "@/utils/errors";
import { NextResponse, type NextRequest } from "next/server"

export async function GET(request:NextRequest){
    try{
      const {searchParams} =  request.nextUrl;
      const page = Number(searchParams.get("page") || 1);    
      const limit = Number(searchParams.get("limit") || 10);    
      const blogsColl = client.db("blogz").collection("blogs");
      const reqBlogs = await blogsColl.find({}, {skip : (page-1) * limit, limit}).toArray();
      return NextResponse.json({staus : "ok", data : reqBlogs}, {status : 200});
    }catch(err){
        console.log("error Message: ", getErrorMessage(err));
        return NextResponse.json({status : "error", message : "Server side error. Please try later."});
    }
}
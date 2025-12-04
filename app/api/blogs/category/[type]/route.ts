"use server";
import { getErrorMessage } from "@/utils/errors";
import { NextRequest, NextResponse } from "next/server";
import client from "@/lib/dbConnect";

type Params = {
    params : Promise<{type:string}>
}

export async function GET(req:NextRequest, {params}:Params){
 try{
     const {type} = await params;
     console.log("request------------------------->", type);
   const blogsCollection = client.db("blogz").collection("blogs");
   
    const blogs = await blogsCollection.aggregate([
      {
        $search : {
            index : "blogFacet",
            equals : {
                path : 'topics',
                value : type
            }
        }
      }  
    ]).toArray();

  return NextResponse.json({status : "ok", result : blogs}, {status : 200});
 }catch(err){
 console.log("error:", getErrorMessage(err));
 }
}
import { NextRequest } from "next/server";
import client from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import { getErrorMessage } from "@/utils/errors";

type Params = {
    params : Promise<{query : string}>
}

export async function GET(request:Request, { params }:Params){
try{
  const query = (await params).query;
  const blogsCollection = client.db("blogz").collection("blogs");

  const result = await blogsCollection.aggregate([
    {
      $search : {
        index : "default",
        text : {
            query,
            path : "topics",
            fuzzy : {
                maxEdits : 2
            }
        }
      }
    },
    {
     $limit : 20
    },
    {
        $addFields : {
            paginationToken : {
                $meta : "searchSequenceToken"
            }
        }
    },
  ]).toArray();

  return  NextResponse.json({status : "ok", result}, {status : 200}); 

}catch(err){
    return NextResponse.json({status : "error", message : getErrorMessage(err)}, {status : 500}); 
}
}
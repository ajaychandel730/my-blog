import clientPromise from "@/lib/dbConnect";
import rateLimitHandler from "@/lib/rateLimitHandler";
import { getErrorMessage } from "@/utils/errors";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req:NextRequest){
 try {
    // limiting
      await rateLimitHandler();
    //
    const {searchParams} = req.nextUrl;
    const limit = Number(searchParams.get("limit"));

    let numBucketSize = 6; 
    if(!isNaN(limit) && limit < 30 && limit > 0){
        numBucketSize = limit;
    }

    const client = await clientPromise;
    const blogsColl = client.db("blogz").collection("blogs");
    const searchMetaStage = {
      $searchMeta: {
        index: "blogFacet",
        facet: {
          operator: {
            exists: {
              path: "topics",
            },
          },
          facets: {
            filterFacet: {
              type: "string",
              path: "topics",
              numBuckets: numBucketSize,
            },
          },
        },
      },
    };

    const filtersFacet = await blogsColl.aggregate([searchMetaStage]).toArray();
    const filterList = filtersFacet[0].facet.filterFacet.buckets;

    return NextResponse.json({
        status : "ok",
        result : filterList
    });

  } catch (err) {
    console.log("error on BlogsFiltersList:", getErrorMessage(err));
    return NextResponse.json({
        status : "error",
        message : "Somthing went wrong.4"
    },{status : 500})
  }
}
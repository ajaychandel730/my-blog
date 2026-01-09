import { NextResponse } from "next/server";
import { getErrorMessage } from "@/utils/errors";
import getSearchBlogs, { serverBlogCard } from "@/actions/getSearchBlogs";
import rateLimitHandler from "@/lib/rateLimitHandler";
import clientPromise from "@/lib/dbConnect";

type Params = {
  params: Promise<{ query: string}>;
};

export async function GET(request: Request, { params }: Params) {
  try {
    // limiting
     await rateLimitHandler();
    //
    const { query} = await params;
    const searchQuery = decodeURIComponent(query).split(",");
    const client = await clientPromise;
    const blogsColl = client.db("blogz").collection("blogs");

    const searchBlogs = await blogsColl.aggregate([
        {
            $search : {
                index: "default",
                    text : {
                        query : searchQuery,
                        path  : "topics",
                        fuzzy : {
                            maxEdits : 1
                        }
                    },
                returnStoredSource : true,
            }
        },
        {
            $limit : 5,
        },
        {
           $project : {
              userId : 0,
              description : 0
           }
        }
    ]).toArray();
    
     
    return NextResponse.json({ status: "ok", result:searchBlogs }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { status: "error", message: getErrorMessage(err) },
      { status: 500 }
    );
  }
}

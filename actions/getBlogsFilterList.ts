import { getErrorMessage } from "@/utils/errors";
export const dynamic = "force-dynamic";
import { headers } from "next/headers";
import { rateLimit } from "@/lib/rateLimit";
import clientPromise from "@/lib/dbConnect";

export interface Filter {
  _id: string;
  count: number;
}

export default async function (numBucketSize: number = 4): Promise<Filter[]> {
  try {
    // limiting
    const headerList = await headers();
    const ip =
      headerList.get("x-forwarded-for") ??
      headerList.get("x-real-ip") ??
      "unknown";

    if (!rateLimit(ip)) {
      throw new Error("Too many requests");
    }
    //
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
    return filterList;
  } catch (err) {
    console.log("error on getBlogsFiltersList:", getErrorMessage(err));
    return [];
  }
}

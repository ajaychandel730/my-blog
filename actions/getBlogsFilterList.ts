import { getErrorMessage } from "@/utils/errors";
export const dynamic = "force-dynamic";
import clientPromise from "@/lib/dbConnect";
import rateLimitHandler from "@/lib/rateLimitHandler";

export interface Filter {
  _id: string;
  count: number;
}

export default async function (numBucketSize: number = 4): Promise<Filter[]> {
  try {
    // limiting
      await rateLimitHandler();
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

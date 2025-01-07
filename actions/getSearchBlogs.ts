import client from "@/lib/dbConnect";
import { TBlogCard } from "@/types/blog";

export type serverBlogCard = TBlogCard & {paginationToken:string | undefined};

type SearchQuery = {
  $search : {
    index : string;
    searchAfter?:string;
    text : object;
  }
};

export default async function (query: string, token?:string): Promise<serverBlogCard[]> {
  console.log("query:", query, " token:", token);
  const blogsCollection = client.db("blogz").collection("blogs");
  
  const searchQuery:SearchQuery = {
    $search: {
      index: "default",
      text: {
        query,
        path: "topics",
        fuzzy: {
          maxEdits: 2,
        },
      },
    },
  };
   
   if(token){
     searchQuery.$search.searchAfter = token;
   }


  const limitQuery = { $limit: 20 };

  const addFieldsQuery = {
    $addFields: {
      paginationToken: {
        $meta: "searchSequenceToken",
      },
    },
  };

  const result = await blogsCollection
    .aggregate([searchQuery, limitQuery, addFieldsQuery])
    .toArray();

  return confirmData(result);
}

// ------------------> helping function
export const confirmData = (data: Array<object>): serverBlogCard[] => {
  const result: serverBlogCard[] = [];

  data.forEach((blog) => {
    const card: serverBlogCard = {
      _id: "_id" in blog ? String(blog._id) : "",
      title: "title" in blog ? String(blog.title) : "",
      description: "description" in blog ? String(blog.description) : "",
      banner: "banner" in blog ? String(blog.banner) : "",
      topics: "topics" in blog && Array.isArray(blog.topics) ? blog.topics : [],
      content:
        "content" in blog && Array.isArray(blog.content) ? blog.content : [],
      date: "date" in blog ? String(blog.date) : "",
      paginationToken : "paginationToken" in blog ? String(blog.paginationToken) : undefined
    };

    result.push(card);
  });

  return result;
};
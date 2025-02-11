import client from "@/lib/dbConnect";
import { TBlogCard } from "@/types/blog";
import { pipeline } from "stream";

type User = {
  _id? : string;
  image?  : string;
  name? : string;
  email? : string;
}

export type serverBlogCard = TBlogCard & {paginationToken:string | undefined, user :User};

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
  // stage 1
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

// stage 2
  const limitQuery = { $limit: 20 };

  // stage 3
  const lookup ={
    $lookup: {
       from: "users",
       localField: "userId",    // field in the orders collection
       foreignField: "_id",  // field in the items collection
       pipeline : [
        {
          $project : {
            password : 0,
            _id : 0,
          }
        }
       ],
       as: "user"
    }
  }
  
 // stage 4
 const addFieldsQuery = {
  $addFields: {
    user : {$first : "$user"},
    paginationToken: {
      $meta: "searchSequenceToken",
    },
  },
};

  const result = await blogsCollection
    .aggregate([searchQuery, limitQuery, lookup, addFieldsQuery])
    .toArray();

  console.log("result", result);
  return confirmData(result);
}

// ------------------> helping function
export const confirmData = (data: Array<object>): serverBlogCard[] => {
  const result: serverBlogCard[] = [];
 
  data.forEach((blog) => {
    const card: serverBlogCard = {
      userId : "userId" in blog ? String(blog.userId) : "",
      user : ("user" in blog && typeof  blog.user == 'object' && blog.user != null)? blog.user : {},
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
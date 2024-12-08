"use server";
import { Blog } from "@/types/blog";
import { getErrorMessage } from "@/utils/errors";
import client from "@/lib/dbConnect";
import blogSchema from "@/lib/zodDefinations/blogSchema";

export default async function(blog:Blog){
 try{
     const blogsColl = client.db("blogz").collection("blogs");
     const result =  blogSchema.safeParse(blog);               
     console.log(result);
     if(!result.success){
        return {status : "failed", error : result.error.flatten().fieldErrors};
     } 

     const newBlog =  await blogsColl.insertOne(result.data);
     return  {status : "ok", message : "New blog added."};

 }catch(err:unknown){
    const message  = getErrorMessage(err);
    return {status : "error",  message : "Server error. Please try later."}
 }
}
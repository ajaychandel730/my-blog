"use server";
import { Blog } from "@/types/blog";
import { getErrorMessage } from "@/utils/errors";
import client from "@/lib/dbConnect";
import blogSchema from "@/lib/zodDefinations/blogSchema";
import { ObjectId } from "mongodb";

export default async function(blog:Blog){
 try{
     const blogsColl = client.db("blogz").collection("blogs");
     const result =  blogSchema.safeParse(blog);               
     
     if(!result.success){
        return {status : "failed", error : result.error.flatten().fieldErrors};
     } 
     
     const userId =  new ObjectId(result.data.userId);
    
     const newBlog =  await blogsColl.insertOne({...result.data, userId, date : new Date()});
     return  {status : "ok", message : "New blog added."};

 }catch(err:unknown){
    const message  = getErrorMessage(err);
    return {status : "error",  message : "Server error. Please try later."}
 }
}
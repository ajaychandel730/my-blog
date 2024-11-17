"use server";
import { Blog } from "@/types/blog";
import client from "@/lib/dbConnect";
import DraftSchema from "@/lib/zodDefinations/DraftSchema";

export default async function(blog:Blog){
try{
    const result = DraftSchema.safeParse(blog);
    
    if(!result.success){
        return {status : "failed", error : result.error.flatten().fieldErrors};
    }
    
    const DraftCollection = client.db("blogz").collection("drafts");
    const draft = await DraftCollection.insertOne(result.data);
    console.log("draft: ", draft);   
    // if(!draft.acknowledged || !draft.insertedId){
       
    // }
     return {status : "ok", message : "Your blog is saved."};

}catch(err){
    console.log(err);
    return {status : "error", message : "Server error. Please try later."}
}
};
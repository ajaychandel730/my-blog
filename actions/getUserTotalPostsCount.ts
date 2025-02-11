import client from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export default async function(userId:string):Promise<number | undefined>{
    try{
     const userCollection =  client.db('blogz').collection("blogs");
     const result = await userCollection.countDocuments({userId : new ObjectId(userId)});
     return result;
    }catch(err){
     return undefined;
    }
}
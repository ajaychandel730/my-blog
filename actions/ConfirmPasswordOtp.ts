"use server";

import { hashOTP, verifyHashCode } from "@/lib/otp";
import { password_otpSchema } from "@/lib/zodDefinations/password_otpSchema";
import { getErrorMessage } from "@/utils/errors";
import client from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export default async function(preState:unknown, formData:FormData){
    const {userId , otp} =  Object.fromEntries(formData.entries());

    try{
        const result = password_otpSchema.safeParse({
            userId,
            otp
        });
        
        if(!result.success){
            return {
                status : 400,
                error : result.error.flatten().fieldErrors
            }
        }
    
     const otpsColl = client.db("blogz").collection("otps");
     const objectId = new ObjectId(userId as string);
     const findDoc = await otpsColl.findOne({_id : objectId});
     console.log("otpDoc:", findDoc);

     if(!findDoc){
        new Error("something went wrong.")
     }

    // verify otp
    if(!verifyHashCode(otp as string, findDoc?.code)){
         return {
            status : 400,
            error : "Invalid OTP. Please enter again."
         }   
    }  
    
    return {
        status : 400,
        error : "otp verified"
    };
  }catch(err){
   console.log("error:", getErrorMessage(err));
   return {
    status : 500,
    error : "Something went wrong."
   }
  }
}
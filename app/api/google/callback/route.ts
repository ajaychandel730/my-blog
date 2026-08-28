import clientPromise from "@/lib/dbConnect";
import { AdminConfigSchema, adminConfigSchema, GoogleGmailServiceEnum } from "@/lib/zodDefinations/admin_config_schema";
import { getErrorMessage } from "@/utils/errors";
import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get("code");
    const error = searchParams.get("error");

    if (error) {
      return NextResponse.json({ status: "failed", message: error });
    }

    if (!code) {
      return NextResponse.json({
        status: "failed",
        message: "Authorization code not provided by google.",
      });
    }

    if (
      !process.env.GOOGLE_CLIENT_ID ||
      !process.env.GOOGLE_CLIENT_SECRET ||
      !process.env.GOOGLE_REDIRECT_URI
    ) {
      return NextResponse.json({
        status: "warning",
        message: "Environment variable is missing in google callback api.",
      });
    }

    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI,
    );
  
    // Exchange auth code for tokens
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);
    
     const adminConfigData:AdminConfigSchema ={
      service:GoogleGmailServiceEnum.GOOGLE_GMAIL,
      email:process.env.OWNER_EMAIL as string,
      refreshToken:tokens.refresh_token as string,
      expiryDate:tokens.expiry_date as number,
      created_At:new Date(),
     }; 

     const result = adminConfigSchema.safeParse(adminConfigData);
     
     if(!result.success){
      return NextResponse.json({status:"failed", error:result.error.message}, {status:422});
     }

    // store in mongodb
    const client = await clientPromise
    const admin_configs_collection =  client.db("blogz").collection("admin_configs");
    const user  = await admin_configs_collection.insertOne(result.data);

    if(!user.insertedId){
      return NextResponse.json({status:"error", message:"Database unable to insert data"});
    }

  
    return NextResponse.json({
      status: "ok",
      message: "Google authentication successfully done.",
    });

  } catch (err) {
    return NextResponse.json(
      { status: "error", message: getErrorMessage(err) },
      { status: 500 },
    );
  }
}

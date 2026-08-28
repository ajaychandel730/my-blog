import { getErrorMessage } from "@/utils/errors";
import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    if(!process.env.GOOGLE_CLIENT_ID ||  !process.env.GOOGLE_CLIENT_SECRET ||  !process.env.GOOGLE_REDIRECT_URI){
       return NextResponse.json({status:"warning", message:"Environment variable is missing in google api."});
    }
    
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI,
    );

    const scopes = ["https://www.googleapis.com/auth/gmail.send"];

    const authUrl = oauth2Client.generateAuthUrl({
      access_type: "offline",
      prompt: "consent", // Guarantees a refresh token on every consent flow
      scope: scopes,
    });

    return NextResponse.redirect(authUrl);
  } catch (err) {
    return NextResponse.json({status:"error", message:getErrorMessage(err)}, {status:500});
  }
}

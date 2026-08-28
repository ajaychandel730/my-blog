"use server";
import { google } from "googleapis";
import clientPromise from "./dbConnect";


////////////////////////////////////
export async function googleGmailService() {
  const oauth2client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI,
  );
  const client = await clientPromise;
  const admin_collection = client.db("blogz").collection("admin_configs");
  const profile = await admin_collection.findOne(
    { email: process.env.OWNER_EMAIL },
    { projection: { refreshToken: 1 } },
  );

  if (!profile || !profile.refreshToken) {
    throw Error(
      "Refresh token is not exist in database. Please generate new one.",
    );
  }

  oauth2client.setCredentials({
    refresh_token: profile.refreshToken,
  });

  return google.gmail({ version: "v1", auth: oauth2client });
}
////////////////////////////////////////////////////////////
export async function sendOTPEmail(to: string, otp: string) {

  const gmail = await googleGmailService();

  const message = [
    `To: ajaychandel730@gmail.com`,
    "Subject:Your Password Reset OTP",
    "Content-type: text/plain; charset=UTF-8",
    "",
    `Hi,
We received a request to reset the password for your account.
Your One-Time Password (OTP) is:${otp}

This OTP is valid for 5 minutes.
Please do not share this code with anyone for security reasons.

If you didn’t request a password reset, you can safely ignore this email. Your account will remain secure.

Thanks,
The BlogSpace Team
This is an automated message. Please do not reply to this email.`,
  ].join("\n");

  const encodedMessage = Buffer.from(message)
    .toString("base64url")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

  const response = await gmail.users.messages.send({
    userId: "me",
    requestBody: {
      raw: encodedMessage,
    },
  });
}
////////////////////////////////////////////////////////////////////////
export async function sendBlogAutomationNotification(
  to: string,
  blogTitle: string,
) {
  const gmail = await googleGmailService();

  const message = [
    `To: ${to}`,
    `Subject:New Blog Ready for Approval:${blogTitle}`,
    "Content-type: text/plain; charset=UTF-8",
    "",
    `Hi,

Your automated blog pipeline has successfully generated a new blog post.

Title: ${blogTitle}
Status: Pending Approval

Please review the blog and approve it if everything looks good.

👉 Review Blog:${process.env.DOMAIN_NAME}

Once approved, the blog can proceed to publication.

Thanks,
Blog Automation System`,
  ].join("\n");

  const encodedMessage = Buffer.from(message)
    .toString("base64url")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

  const response = await gmail.users.messages.send({
    userId: "me",
    requestBody: {
      raw: encodedMessage,
    },
  });
}

import { google } from "googleapis";

const oauth2client = new google.auth.OAuth2(
  process.env.OTP_GMAIL_CLIENT_ID,
  process.env.OTP_GMAIL_CLIENT_SECRET,
  process.env.OTP_GMAIL_RDIRECT_URI
);

oauth2client.setCredentials({
  refresh_token: process.env.OTP_GMAIL_REFRESH_TOKEN,
});

export async function sendOTPEmail(to: string, otp: string) {
  const gmail = google.gmail({ version: "v1", auth: oauth2client });

  const message = [
    `To: ${to}`,
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
    .toString("base64")
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

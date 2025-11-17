import {google} from "googleapis";

const oauth2client = new google.auth.OAuth2(
    process.env.OTP_GMAIL_CLIENT_ID,
    process.env.OTP_GMAIL_CLIENT_SECRET
);

oauth2client.setCredentials({
 refresh_token : process.env.OTP_GMAIL_REFRESH_TOKEN
});



export async function sendOTPEmail(to:string, otp:string){
 const gmail = google.gmail({version : "v1", auth : oauth2client});
 const message = [
    `To: ${to}`,
    "Subject: Your OTP code",
    "Content-type: text/plain; charset=UTF-8",
    "",
    `Your OTP is: ${otp}. it expries in 5 minutes.`, 
 ].join("\n");

 const encodedMessage = Buffer.from(message)
 .toString("base64")
 .replace(/\+/g, "-")
  .replace(/\//g, "_")
  .replace(/=+$/, "");

  await gmail.users.messages.send({
    userId : "me",
    requestBody : {
        raw : encodedMessage,
    }
  });
}


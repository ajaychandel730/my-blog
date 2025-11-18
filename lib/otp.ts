import crypto from "crypto";


const secret_key = process.env.OTP_SECRET_KEY!;

export const generateOTP = (length=6):string=>{
 const otp = crypto.randomInt(0, 10 ** length).toString().padStart(length, "0");
 return otp;
};

export const hashOTP = (otp:string):string=>{
     return crypto.createHmac("sha256", secret_key).update(otp).digest("hex");
};

export const verifyHashCode = (userOtp:string, hashCode:string):boolean=>{
   const userHashCode = hashOTP(userOtp);
   return userHashCode === hashCode;
}
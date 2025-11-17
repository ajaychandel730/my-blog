import crypto from "crypto";

export const generateOTP = (length=6):string=>{
 const otp = crypto.randomInt(0, 10 ** length).toString().padStart(length, "0");
 return otp;
};

export const hashOTP = (otp:string):string=>{
     return crypto.createHash("sha256").update(otp).digest("hex");
};


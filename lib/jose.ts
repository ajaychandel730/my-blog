import {JWTPayload, SignJWT, jwtVerify} from "jose";
import {createSecretKey} from "crypto";  


const secret = createSecretKey(Buffer.from(process.env.RESET_TOKEN_SECRET as string));

export type ResetTokenPayload = {
    id : string;
}

export const signResetToken = async (payload:ResetTokenPayload, expriesMinutes:number):Promise<string>=>{
   const token = await new SignJWT(payload)
               .setProtectedHeader({alg : "HS256", typ : "JWT"})
               .setIssuedAt()
               .setExpirationTime(`${expriesMinutes} min`)
               .sign(secret);
   return token;
}

export const verifyResetToken = async (token:string):Promise<JWTPayload & ResetTokenPayload>=>{
    const {payload} = await jwtVerify(token, secret);
    return payload as JWTPayload & ResetTokenPayload;
}


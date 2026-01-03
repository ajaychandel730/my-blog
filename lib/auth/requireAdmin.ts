"use server";
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/options";
import { UserRole } from "@/types/user";
import { getServerSession, Session } from "next-auth";

type AuthResult = {
    status : "failed";
    message : string;
} | {
    status : "ok";
    session : Session;
}

export default  async function():Promise<AuthResult>{
     const session = await getServerSession(nextAuthOptions);

    if (!session) {
      return { status: "failed", message: "Please login your account." };
    }

    if(session.user.role !== UserRole.ADMIN){
         return {
          status : "failed",
          message : "You don’t have permission to access this feature.",
         }
    }

    return {status : "ok" , session};
}
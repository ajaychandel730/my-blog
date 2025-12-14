import "next-auth";
import { DefaultSession } from "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
    interface Session{
        user : {
            id? : string;
            name : string;
            image : string;
            email : string;
        } & DefaultSession["user"]
    }

    interface User {
        id: string;
        email: string;
        password: string;
        name : string,
        image : string,
    }
}


declare module "next-auth/jwt"{
    interface JWT {
        id : string;
        name : string;
        picture : string;
        isVerify : boolean;
        email : string;
    }
}
import { User } from "@/lib/types";


export function isUser(user:any) : user is User{
 return (
   typeof user  == "object" &&
   typeof user.name == "string" &&
   typeof user.email == "string" &&
   typeof user.image == "string" &&
   typeof user._id == "string" 
 )
}
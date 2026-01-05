
export enum UserRole {
  ADMIN = "admin",
  USER = "user",
  OWNER = "owner",
};

export interface FeedbackMessage{
 _id : string; 
 name : string;
 email : string;
 subject : string;
 text : string;
 created_at : string;
 expires_at? : string;
}
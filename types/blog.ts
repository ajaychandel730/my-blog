import { User } from "@/lib/types";

export interface Blog {
  user : {
    name : string;
    email : string;
    image : string;
    _id : string;
  };
  title: string;
  banner: string;
  topics: string[];
  description: string;
  content?: Array<unknown>;
}

export type TBlogCard = Blog & {
  _id: string;
  date: string;
};

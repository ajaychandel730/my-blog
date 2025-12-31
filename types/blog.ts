
export interface Blog {
  user : {
    name : string;
    email : string;
    image? : string;
    _id? : string;
  };
  title: string;
  banner: string;
  topics: string[];
  description: string;
  content?: Array<unknown>;
  _id : string;
  date:string;
  userId?:string;
}

export interface BlogCard  {
  user : {
    image? : string;
  };
  title: string;
  banner: string;
  topics: string[];
  description: string;
  _id : string;
  date : string;
}

export enum BlogType {
  published = "PUBLISHED",
  draft = "DRAFT",
}

export interface BlogFilter{
  _id : string;
  count : number;
}

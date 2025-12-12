
export interface Blog {
  user : {
    name? : string;
    email? : string;
    image? : string;
    _id : string;
  };
  title: string;
  banner: string;
  topics: string[];
  description: string;
  content?: Array<unknown>;
  _id : string;
  date:string;
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


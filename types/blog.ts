export interface Blog {
  userId: string;
  userName: string;
  userImg: string;
  title: string;
  banner: string;
  topics: string[];
  description: string;
  content: Array<unknown>;
}

export type TBlogCard = Blog & {
  _id: string;
  date: string;
};

export interface Blog{
    title : string;
    banner : string;
    topics : string[];
    description : string;
    content : Array<unknown>
}


export type TBlogCard = Blog & {
    _id : string;
} 

import { z } from "zod";


export default z.object({
    title : z.string().max(100,"Title is too long. Please keep it under 100 characters." ).min(3, {message : "Title must contain at least 3 characters."}),
    banner : z.string().url({message : "Blog image must be required."}),
    topics : z.array(z.string()).min(1, {message : "Please enter blog topic."}),
    description : z.string().max(300, { message : "Description must contain at most 300 characters."}),
    content : z.array(z.unknown())
});
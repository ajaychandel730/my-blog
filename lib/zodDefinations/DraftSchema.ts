import {z} from "zod"


export default z.object({
    title : z.string().max(64).min(3, {message : "Title must contain at least 3 characters."}),
    banner : z.string().url({message : "banner image have invalid url."}),
    topics : z.array(z.string()),
    description : z.string(),
    content : z.array(z.unknown())
})
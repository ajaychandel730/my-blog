import React from "react";
import { ImageNode } from "@/types/novel";
import { Image } from "@heroui/image";

type Props = {
    node : ImageNode;
}

 const ShowImageNode = ({node}:Props)=>{
   if(node.type !== "image" || !node.attrs) return null;
   const {attrs} = node;

    return (
        <Image
          src={attrs.src}
          alt={attrs.alt || "image"}
          width={attrs.width || 700}
          height={attrs.height || 350}
          className="object-fill rounded-md"
        />
    )
}

export default ShowImageNode;
import { ParagraphNode, TaskItemNode } from "@/types/novel";
import React from "react";
import ShowParagraphNode from "./ShowParagraphNode";
import { nanoid } from "@reduxjs/toolkit";

type Props = {
  node: TaskItemNode;
};

const ShowTaskItemNode = ({ node }: Props) => {
  return (
    <li>
      {node.content?.map((childNode: ParagraphNode) => (
         <label className="inline-flex space-x-2 cursor-text" key={nanoid(6)}>
           <input type="checkbox" className="rounded-lg w-5 h-5" readOnly checked={node.attrs.checked}/>
           <ShowParagraphNode key={nanoid(6)} node={childNode} /> 
         </label>
      ))}
    </li>
  );
};

export default ShowTaskItemNode;

import { ListItemNode, ParagraphNode } from "@/types/novel";
import React from "react";
import ShowParagraphNode from "./ShowParagraphNode";
import { nanoid } from "@reduxjs/toolkit";

type Props = {
  node: ListItemNode;
};

const ShowListItemNode = ({ node }: Props) => {
  return (
    <li>
      {node.content.map((node: ParagraphNode) => (
        <ShowParagraphNode key={nanoid(6)} node={node} />
      ))}
    </li>
  );
};

export default ShowListItemNode;

import React from "react";
import { ParagraphNode, TextNode } from "@/types/novel";
import ShowTextNode from "./ShowTextNode";
import { nanoid } from "@reduxjs/toolkit";

type Props = {
  node: ParagraphNode;
};

const ShowParagraphNode = ({ node }: Props): React.JSX.Element => {
  return (
    <p>
      {node.content?.map((textNode: TextNode) => (
        <ShowTextNode key={nanoid(6)} node={textNode} />
      ))}
    </p>
  );
};

export default ShowParagraphNode;

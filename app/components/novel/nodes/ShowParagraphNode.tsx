import React from "react";
import { ParagraphNode, TextNode } from "@/types/novel";
import ShowTextNode from "./ShowTextNode";
import { nanoid } from "@reduxjs/toolkit";

type Props = {
  node: ParagraphNode;
};

const ShowParagraphNode = ({ node }: Props): React.JSX.Element => {
  return (
    <p className="text-base leading-relaxed text-neutral-800 text-justify">
      {node.content?.map((textNode: TextNode) => (
        <ShowTextNode key={nanoid(6)} node={textNode} />
      ))}
    </p>
  );
};

export default ShowParagraphNode;

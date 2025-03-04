import React from "react";
import { HeadingNode , TextNode } from "@/types/novel";
import ShowTextNode from "./ShowTextNode";
import { nanoid } from "@reduxjs/toolkit";

type Props = {
  node: HeadingNode;
};

const ShowHeadingNode = ({ node }: Props) => {
  if (node.type !== "heading") return null;

  const textNodes: React.JSX.Element[] = node.content?.map((node: TextNode) =>
    <ShowTextNode key={nanoid(6)} node={node}/>
  );

  return React.createElement(`h${node.attrs.level}`, {}, ...textNodes);
};

export default ShowHeadingNode;

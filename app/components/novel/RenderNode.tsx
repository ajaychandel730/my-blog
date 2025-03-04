"use client";
import React from "react";
import {
  Blockquote,
  BulletListNode,
  HeadingNode,
  ImageNode,
  NovelNode,
  OrderedListNode,
  ParagraphNode,
  TaskListNode,
} from "@/types/novel";
import ShowParagraphNode from "./nodes/ShowParagraphNode";
import ShowImageNode from "./nodes/ShowImageNode";
import ShowHeadingNode from "./nodes/ShowHeadingNode";
import ShowBulletListNode from "./nodes/ShowBulletListNode";
import ShowOrderedListNode from "./nodes/ShowOrderedListNode";
import ShowBlockquoteNode from "./nodes/ShowBlockquoteNode";
import ShowTaskListNode from "./nodes/ShowTaskListNode";

type Props = {
  node: NovelNode;
};

/// main function
const RenderNode = ({ node }: Props) => {
  if (node.type == "paragraph") {
    return ShowParagraphNode({ node: node as ParagraphNode });
  } else if (node.type == "image") {
    return ShowImageNode({ node: node as ImageNode });
  } else if (node.type == "heading") {
    return <ShowHeadingNode node={node as HeadingNode} />;
  } else if (node.type == "bulletList") {
    return <ShowBulletListNode node={node as BulletListNode} />;
  } else if (node.type == "orderedList") {
    return <ShowOrderedListNode node={node as OrderedListNode} />;
  } else if (node.type == "blockquote") {
    return <ShowBlockquoteNode node={node as Blockquote} />;
  } else if (node.type == "taskList") {
    return <ShowTaskListNode node={node as TaskListNode} />;
  } else {
    return null;
  }
};

export default RenderNode;

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

const RenderNode = ({ node }: Props): React.JSX.Element | null => {
  switch (node.type) {
    case "paragraph":
      return <ShowParagraphNode node={node as ParagraphNode} />;

    case "image":
      return <ShowImageNode node={node as ImageNode} />;

    case "heading":
      return <ShowHeadingNode node={node as HeadingNode} />;

    case "bulletList":
      return <ShowBulletListNode node={node as BulletListNode} />;

    case "orderedList":
      return <ShowOrderedListNode node={node as OrderedListNode} />;

    case "blockquote":
      return <ShowBlockquoteNode node={node as Blockquote} />;

    case "taskList":
      return <ShowTaskListNode node={node as TaskListNode} />;

    default:
      return null;
  }
};

export default RenderNode;

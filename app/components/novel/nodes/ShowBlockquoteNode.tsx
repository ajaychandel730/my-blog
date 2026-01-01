import {
  Blockquote,
  BulletListNode,
  OrderedListNode,
  ParagraphNode,
  TaskListNode,
} from "@/types/novel";
import React from "react";
import ShowParagraphNode from "./ShowParagraphNode";
import ShowOrderedListNode from "./ShowOrderedListNode";
import ShowBulletListNode from "./ShowBulletListNode";
import { nanoid } from "@reduxjs/toolkit";
import ShowTaskListNode from "./ShowTaskListNode";

type BlockquoteNodeProps = {
  node: Blockquote;
};

const ShowBlockquoteNode = ({ node }: BlockquoteNodeProps) => {
  if (node.type !== "blockquote") return null;

  type ChildNode =
    | ParagraphNode
    | BulletListNode
    | OrderedListNode
    | TaskListNode;

  return (
    <blockquote className="border-l-4 border-blue-500 pl-4 bg-red-600">
      {Array.isArray(node.content) &&
        node.content.map((childNode: ChildNode) => {
          switch (childNode.type) {
            case "paragraph":
              return (
                <ShowParagraphNode
                  key={nanoid(6)}
                  node={childNode as ParagraphNode}
                />
              );
            case "bulletList":
              return (
                <ShowBulletListNode
                  key={nanoid(6)}
                  node={childNode as BulletListNode}
                />
              );
            case "orderedList":
              return (
                <ShowOrderedListNode
                  key={nanoid(6)}
                  node={childNode as OrderedListNode}
                />
              );
            case "taskList":
              return (
                <ShowTaskListNode
                  key={nanoid(6)}
                  node={childNode as TaskListNode}
                />
              );
            default:
              return null;
          }
        })}
    </blockquote>
  );
};

export default ShowBlockquoteNode;

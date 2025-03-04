import { ListItemNode, OrderedListNode } from "@/types/novel";
import React from "react";
import ShowListItemNode from "./ShowListItemNode";
import { nanoid } from "@reduxjs/toolkit";

type Props = {
  node: OrderedListNode;
};

const ShowOrderedListNode = ({ node }: Props) => {
  if (node.type !== "orderedList") return null;

  return (
    <ol className="px-4 list-decimal" start={node.attrs.start || 1}>
      {node.content?.map((node: ListItemNode) => (
        <ShowListItemNode key={nanoid(6)} node={node} />
      ))}
    </ol>
  );
};

export default ShowOrderedListNode;

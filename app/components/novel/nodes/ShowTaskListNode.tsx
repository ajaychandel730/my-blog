import { TaskItemNode, TaskListNode } from "@/types/novel";
import React from "react";
import ShowTaskItemNode from "./ShowTaskItemNode";
import { nanoid } from "@reduxjs/toolkit";

type Props = {
  node: TaskListNode;
};
const ShowTaskListNode = ({ node }: Props) => {
  if (node.type !== "taskList") return null;

  return (
    <ul  className="cursor-default">
      {node.content?.map((childNode: TaskItemNode) => (
        <ShowTaskItemNode key={nanoid(6)} node={childNode} />
      ))}
    </ul>
  );
};

export default ShowTaskListNode;

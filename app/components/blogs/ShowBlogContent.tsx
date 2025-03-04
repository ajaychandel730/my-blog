"use client";
import { useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import RenderNode from "@/app/components/novel/RenderNode";
import { NovelNode } from "@/types/novel";
import { nanoid } from "@reduxjs/toolkit";
import React from "react";

type Props = {
  content: unknown[];
};

const ShowBlogContent = ({ content }: Props) => {
  return (
    <div className="flex w-full  flex-col space-y-2">
      {content.map((node) => (
        <RenderNode key={nanoid(6)} node={node as NovelNode} />
      ))}
    </div>
  );
};

export default ShowBlogContent;

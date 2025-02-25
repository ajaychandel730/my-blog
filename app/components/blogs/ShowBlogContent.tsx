"use client";

import { useAppSelector } from '@/lib/hooks';
import { RootState } from '@/lib/store';
import renderNode, { NovelNode} from '@/utils/renderNode';
import React from 'react'

type Props = {
  content  : unknown[]
}

const ShowBlogContent = ({content}:Props) => {
   const blog1 = JSON.parse(String(window.localStorage.getItem("blog")));

  // if(!blog.content?.content) return null;
  console.log("server side:", blog1.content.content[1]);
    return (
    <div>
        {
          renderNode(blog1.content.content[1] as NovelNode)
        }
    </div>
  )
}

export default ShowBlogContent
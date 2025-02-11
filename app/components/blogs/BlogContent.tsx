"use server";
import getBlogById from '@/actions/getBlogById'
import { Card } from '@nextui-org/card'
import { notFound } from 'next/navigation';
import React from 'react'

const BlogContent = async({blogId}:{blogId:string}) => {
const blog = await getBlogById(blogId);
if(!blog){notFound()};
    

  return (
    <Card>

    </Card>
  )
}

export default BlogContent
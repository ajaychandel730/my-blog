"use server";
import React from 'react'
import fetchGetBlogsByCategory from '@/actions/fetchGetBlogsByCategory';
import DefaultBlogs from '../searchPage/DefaultBlogs';

type Props = {
  params : Promise<{type:string}>;
}


const BlogCategoryList = async ({params}:Props) => {
    const {type} = await params;
    console.log("server Compoent:", type);

    if(type === "all"){
         return (
           <DefaultBlogs/>
         )
    }

    const blogs =  await fetchGetBlogsByCategory(`/api/blogs/category/${type}`);

    console.log(blogs);
  return (
    <div>
      
    </div>
  )
}

export default BlogCategoryList;


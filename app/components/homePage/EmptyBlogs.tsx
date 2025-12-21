import React from 'react'
import { Camera } from "lucide-react";
import CreateBlog from './HeaderButtons/CreateBlogButton';

const EmptyBlogs = () => {
  return (
    <div className='w-full h-[100vh] space-y-2 flex flex-col items-center justify-center'>
        <Camera className='w-fit text-xl text-gray-500 h-28'/>
        <span className='font-semibold text-lg'>No blogs found.</span>
        <p className='text-gray-500 mt-4'>Looks like there's nothing here. Start writing your first blog now!</p>
         <CreateBlog />
    </div>
  )
}

export default EmptyBlogs;
"use client";
import React from 'react'
import Navbar from '../components/Navbar';
import BlogsPagination from '../components/BlogsPagination';
import DefaultBlogs from '../components/searchPage/DefaultBlogs';

const BlogPage = () => {
  
  return (
    <div className='flex items-center justify-center w-full'>
      <Navbar/>
      <DefaultBlogs/>
    </div>
  )
}

export default BlogPage;
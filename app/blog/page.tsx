"use client";
import React from 'react'
import Navbar from '../components/Navbar';
import BlogsPagination from '../components/BlogsPagination';
import DefaultBlogs from '../components/searchPage/DefaultBlogs';

const BlogPage = () => {
  
  return (
    <>
      <Navbar/>
      <DefaultBlogs/>
    </>
  )
}

export default BlogPage;
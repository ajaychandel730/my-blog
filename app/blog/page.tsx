import React from 'react'
import Navbar from '../components/Navbar';
import DefaultBlogs from '../components/DefaultBlogs';
import BlogsPagination from '../components/BlogsPagination';

const BlogPage = () => {
  return (
    <>
      <Navbar/>
      <DefaultBlogs/>
    </>
  )
}

export default BlogPage;
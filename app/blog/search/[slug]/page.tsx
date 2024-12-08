import Navbar from '@/app/components/Navbar'
import SearchBlogs from '@/app/components/DefaultBlogs'
import React from 'react'

const searchPage = () => {
  return (
    <>
      <Navbar/>
      <SearchBlogs/>
    </>
  )
}

export default searchPage
"use client";
import { Input } from '@nextui-org/input'
import React from 'react'
import { FiSearch } from 'react-icons/fi'

const BlogSearchInput = () => {
  return (
    <div className='mt-4 flex items-center justify-start w-full'>
    <Input
      startContent={<FiSearch className='w-5 h-5 '/>}
      placeholder='Type to search'
      size='lg'
      isClearable
      color='default'
      label="Search blogs"
      className='max-w-xs text-lg'
    />
</div>
  )
}

export default BlogSearchInput
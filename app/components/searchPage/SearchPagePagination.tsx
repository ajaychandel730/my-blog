"use client";
import React from 'react'
import PrevSearchPageButton from './PrevSearchPageButton'
import NextSearchPageButton from "./NextSearchPageButton"


const SearchPagePagination = ({paginationToken}:{paginationToken:string|undefined}) => {
  return (
    <div className='flex items-center justify-center gap-2 w-full'>
        <PrevSearchPageButton/>
        <NextSearchPageButton paginationToken={paginationToken}/>
    </div>
  )
}

export default SearchPagePagination;
"use client";
import React, { startTransition } from 'react'
import ConnectionErrorState from '../ConnectionErrorState'
import NoBlogsState from './NoBlogsState'
import { useRouter } from 'next/navigation';

interface Props {
 type : "connection_error" | "no_blogs"
}

const BlogsEmptyState = ({type}:Props) => {
  const router = useRouter();

  const refreshRoute = ()=>{
   startTransition(()=>{
     router.refresh();
   })
  }
   switch(type){
     case "connection_error" : 
     return (<ConnectionErrorState reset={refreshRoute}/>);
     
     case "no_blogs" : 
     return (<NoBlogsState/>);
     
     default : 
     return null;
   }
}

export default BlogsEmptyState
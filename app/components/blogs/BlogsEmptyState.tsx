import React from 'react'
import ConnectionErrorState from '../ConnectionErrorState'
import NoBlogsState from './NoBlogsState'

interface Props {
 type : "connection_error" | "no_blogs"
}

const BlogsEmptyState = ({type}:Props) => {
  
   switch(type){
     case "connection_error" : 
     return (<ConnectionErrorState/>);
     
     case "no_blogs" : 
     return (<NoBlogsState/>);
     
     default : 
     return null;
   }
}

export default BlogsEmptyState
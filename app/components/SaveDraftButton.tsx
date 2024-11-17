"use client";

import React from 'react'
import { Button } from '@nextui-org/button'
import { toast } from 'react-toastify';
import { getErrorMessage } from '@/utils/errors';
import saveDraftBlog from '@/actions/saveDraftBlog';
import { useAppSelector } from '@/lib/hooks';
import { RootState } from '@/lib/store';

const SaveDraftButton = () => {
 const {blog} = useAppSelector((state:RootState)=> state.editorReducer);
 console.log("saveDraft:", blog);
 console.log(Array.isArray(blog.content?.content));

  const handleSaveDraft = async()=>{
   try{
    const res = await saveDraftBlog({
      title : blog.title || "",
      banner : blog.image || "",
      description : blog.description || "",
      topics : blog.topics || [],
      content : blog.content? Array.isArray(blog.content.content)?blog.content.content : [] : [],
    });
    
    if(res.status == "ok"){
      toast.success(res.message || "Draft Saved.");
    }else{
      if("error" in  res && typeof res.error == "object"){
        Object.entries(res.error).forEach(([key, value])=>{
          toast.error(value.toString());
        })            
      }
    }
   }catch(err){
     toast.error(getErrorMessage(err));
   }   
  }
  return (
    <Button onPress = {handleSaveDraft}>Save draft</Button>
     
  )
}

export default SaveDraftButton
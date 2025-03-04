"use client";
import { useAppDispatch } from '@/lib/hooks'
import { isReseting, resetBlog, setBlog } from '@/lib/store';
import { Button } from "@heroui/button"
import React, { useTransition } from 'react'
import { toast } from 'react-toastify';

const NewBlogButton = () => {
    const dispatch = useAppDispatch();
    const [isPending, startTransition] = useTransition();

    const handleNewBlogClick = ()=>{
        const confirmReset = window.confirm(
            "Starting a new blog will delete all unsaved progress. Do you want to continue?"
          );
        if(!confirmReset) return; 
        localStorage.removeItem("blog");
         dispatch(isReseting(true));

          setTimeout(()=>{
            dispatch(resetBlog());
            toast.success("New blog created successfully! Start writing now.");  
          }, 0);
         
    } 

  return (
    <Button  onPress={handleNewBlogClick}color='default' size='md'>
         New blog
    </Button>
  )
}

export default NewBlogButton
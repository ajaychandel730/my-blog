"use client";
import { Button } from '@heroui/button';
import { Upload } from 'lucide-react';
import React, { useRef } from 'react'

const UploadNewPhotoButton = () => {
  const imageInputRef = useRef<HTMLInputElement>(null);
  
  const imageHandler = (event :React.ChangeEvent<HTMLInputElement>)=>{
   console.log("image:", event.target?.files);
    if(imageInputRef?.current){
      imageInputRef.current.value = "";
    }
  }

  return (
    <>
    <input ref={imageInputRef} onChange={imageHandler}  type="file" accept='.jpg, .png, .webp' hidden/>
     <Button type='button' onPress={()=>{imageInputRef.current?.click()}} color='primary' size='md'  startContent={<Upload className='w-5 h-5'/>}>
           Upload new photo
     </Button>
    </>
     
  )
}

export default UploadNewPhotoButton
"use client";
import { Button } from '@heroui/button';
import { Upload } from 'lucide-react';
import React from 'react'

const UploadNewPhotoButton = () => {

  return (
    <>
    <input type="file" accept='.jpg, .png, .webp' hidden/>
     <Button color='primary' size='md'  startContent={<Upload className='w-5 h-5'/>}>
           Upload new photo
     </Button>
    </>
     
  )
}

export default UploadNewPhotoButton
"use client";

import { getErrorMessage } from '@/utils/errors';
import { Button } from '@heroui/button';
import { Upload } from 'lucide-react';
import React, { useRef, useState } from 'react'


interface Props{
  changeUserImage : (image:string)=>void;
}

const UploadNewPhotoButton = ({changeUserImage}:Props) => {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);

  const imageHandler = async (event :React.ChangeEvent<HTMLInputElement>)=>{
    const {toast} = await import("sonner");
    const {default : convertIntoCompressFile} = await import('@/lib/imageCompress/convertIntoCompressFile');
    const {uploadImageOnCloudinary} = await import('@/lib/cloudinary');
    const {files} = event.target;
    if(files == null){
      toast.info("Image not selected. Please re-select again.");
      return;
    }

   try{
     setIsImageLoading(true);
     const conpressFile = await convertIntoCompressFile(files[0],{maxSizeMB : 0.1, maxWidthOrHeight:200});
     if(!conpressFile){
       toast.error("Enable to load image. Please try again.");
       return;
     }else{
       const fileReader = new FileReader();
       fileReader.readAsDataURL(conpressFile);
       fileReader.onload = async()=>{
         const base64Url = fileReader.result as string;
         const cloudHttpsUrl = await uploadImageOnCloudinary(base64Url);
         if(!cloudHttpsUrl){
            toast.error("Enable to load image. Please check your internet connection.");
            return;
         }

         changeUserImage(cloudHttpsUrl);
         toast.success("Profile image uploaded.");
         setIsImageLoading(false);
       }
     }
   }catch(err){
     toast.error(getErrorMessage(err));
   }
  }

  return (
    <>
    <input ref={imageInputRef} onChange={imageHandler}  type="file" accept='.jpg, .png, .webp' hidden/>
     <Button isLoading={isImageLoading}  type='button' onPress={()=>{imageInputRef.current?.click()}} color='primary' size='md'  startContent={!isImageLoading && <Upload className='w-5 h-5'/>}>
           Upload new photo
     </Button>
    </>
     
  )
}

export default UploadNewPhotoButton
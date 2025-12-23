"use client";
import { uploadImageOnCloudinary } from '@/lib/cloudinary';
import convertIntoCompressFile from '@/lib/convertIntoCompressFile';
import { getErrorMessage } from '@/utils/errors';
import { Button } from '@heroui/button';
import { Upload } from 'lucide-react';
import React, { useRef, useState } from 'react'
import { toast } from 'sonner';

interface Props{
  setProfileUrl : React.Dispatch<React.SetStateAction<string>>
}

const UploadNewPhotoButton = ({setProfileUrl}:Props) => {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);

  const imageHandler = async (event :React.ChangeEvent<HTMLInputElement>)=>{
    const {files} = event.target;
    if(files == null){
      toast.info("Image not selected. Please re-select again.");
      return;
    }

   try{
     setIsImageLoading(true);
     const conpressFile = await convertIntoCompressFile(files[0]);
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

         setProfileUrl(cloudHttpsUrl);
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
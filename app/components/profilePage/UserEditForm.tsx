"use client";
import { Form } from '@heroui/form'
import React from 'react'
import { Image } from '@heroui/image';
import UploadNewPhotoButton from './UploadNewPhotoButton';

type  Props ={
    user  : {
        email : string;
        name : string;
        image : string;
    }
}

const UserEditForm = ({user}:Props) => {

  return (
   <Form className='w-full mt-20'>
         <div className='w-full space-y-2 pb-10 border-b-1 border-gray-300'>
             <label>Profile picture</label>
             <div className='flex space-x-4 items-center' >
                  <Image src={user.image} width={100} height={100} radius='full'></Image>
                  <UploadNewPhotoButton/>
             </div>

         </div>
   </Form>
  )
}

export default UserEditForm
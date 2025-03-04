"use client";
import React from 'react'
import { Button } from "@heroui/button";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from 'next/navigation';

const GoBackButton = () => {
  const router =  useRouter();

  return (
    <Button onPress={()=> router.back()} startContent={<IoIosArrowBack/>} size='md' variant='light' >
         Back to blog
    </Button>
  )
}

export default GoBackButton
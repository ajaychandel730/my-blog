"use client";
import React from 'react'
import { Button } from "@heroui/button";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from 'next/navigation';

const GoBackButton = () => {
  const router =  useRouter();

  return (
    <Button onPress={()=> router.back()} startContent={<ArrowLeftIcon className="w-5 h-5"/>} size='md' variant='light' >
         Back to blog
    </Button>
  )
}

export default GoBackButton
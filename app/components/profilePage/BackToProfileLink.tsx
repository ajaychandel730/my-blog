"use client";
import React from 'react'
import { Button } from '@heroui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
const BackToProfileLink = () => {
  return (
    <Button  as={Link} href='/user/profile' className='text-gray-700 darkButton' variant='light' size='md' startContent={<ArrowLeft className='w-5 h-5'/>}>
          Back to profile
    </Button>
  )
}

export default BackToProfileLink
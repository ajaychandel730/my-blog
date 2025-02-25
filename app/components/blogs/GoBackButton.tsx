"use client";
import React from 'react'
import { Button } from '@nextui-org/button';
import { IoIosArrowBack } from "react-icons/io";

const GoBackButton = () => {
  return (
    <Button startContent={<IoIosArrowBack/>} size='md' variant='light' >
         Back to blog
    </Button>
  )
}

export default GoBackButton
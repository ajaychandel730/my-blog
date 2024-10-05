"use client";
import React from 'react'
import { useFormStatus } from 'react-dom'
import { Button } from '@nextui-org/button';
interface props {
    text : string;
}
const Submitbutton = ({text}:props) => {
  const {pending} = useFormStatus();
  return (
    <Button
    type="submit"
    isLoading = {pending}
    fullWidth
    color='primary'
    size='md'
    className="w-full"
  >
    {text}
  </Button>
  )
}

export default Submitbutton
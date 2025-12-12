"use client";
import React from 'react'
import { Button } from "@heroui/button";
interface props {
    text : string;
    isPending : boolean;
}
const Submitbutton = ({text, isPending}:props) => {

  return (
    <Button
    type="submit"
    isLoading = {isPending}
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
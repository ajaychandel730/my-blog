"use client";
import { Button } from "@heroui/button";
import { usePathname, useRouter} from 'next/navigation';
import React from 'react'
import { BsChevronLeft } from "react-icons/bs";

const PrevSearchPageButton = () => {
    const [,,,,token] = usePathname().split("/");
    const router = useRouter();

  return (
    <Button isIconOnly radius="full" size="sm" onPress={()=>{router.back()}} isDisabled={!token}color='default'>
        <BsChevronLeft/>
    </Button>
  )
}

export default PrevSearchPageButton;
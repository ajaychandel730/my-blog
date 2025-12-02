"use client";
import { Button } from "@heroui/button";
import { usePathname, useRouter} from 'next/navigation';
import React from 'react'
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

const PrevSearchPageButton = () => {
    const [,,,,token] = usePathname().split("/");
    const router = useRouter();

  return (
    <Button isIconOnly radius="full" size="sm" onPress={()=>{router.back()}} isDisabled={!token}color='default'>
        <ChevronLeftIcon className="w-5 h-5"/>
    </Button>
  )
}

export default PrevSearchPageButton;
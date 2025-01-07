"use client";
import { Button } from '@nextui-org/button';
import { usePathname, useRouter} from 'next/navigation';
import React from 'react'

const PrevSearchPageButton = () => {
    const [,,,,token] = usePathname().split("/");
    const router = useRouter();

  return (
    <Button onPress={()=>{router.back()}} isDisabled={!token}color='default'>Previous</Button>
  )
}

export default PrevSearchPageButton;
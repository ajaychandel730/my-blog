"use client";
import React from 'react'
import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
    paginationToken : string | undefined;
}

const NextSearchPage = ({paginationToken}:Props) => {
  const [,a,b,query] = usePathname().split("/");
 
  return (
   <>
   <Button isDisabled={!paginationToken} as={Link} href={`/${a}/${b}/${query}/${paginationToken}`} color='default'>next</Button>
   </>
  )
}

export default NextSearchPage;
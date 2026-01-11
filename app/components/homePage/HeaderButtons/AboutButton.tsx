"use client";
import React from 'react'
import { Button } from '@heroui/button';
import Link from 'next/link';

const AboutButton = () => {
  return (
    <Button type='button' aria-description='About page link' as={Link} href='/about' variant='light' size='md'  className="darkButton dark:!bg-transparent dark:hover:!bg-midnight-800 text-sm">
         About
    </Button>
  )
}

export default AboutButton
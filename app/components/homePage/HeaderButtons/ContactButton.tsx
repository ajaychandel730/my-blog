"use client";
import React from 'react'
import { Button } from '@heroui/button';
import Link from 'next/link';

const ContactButton = () => {
  return (
    <Button type='button' aria-description='Contact page link' as={Link} href='/contact' variant='light' size='md'  className="darkButton dark:!bg-transparent dark:hover:!bg-midnight-800 text-sm">
         Contact
    </Button>
  )
}

export default ContactButton
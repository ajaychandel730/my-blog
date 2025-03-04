import { Button } from '@heroui/button';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@heroui/dropdown';
import React from 'react'
import { BsThreeDots } from "react-icons/bs";
import Link from 'next/link';

const BlogActionMenu = () => {
  return (
    <Dropdown>
    <DropdownTrigger>
      <Button size='md' radius='full' className='px-2' isIconOnly variant="light">
          <BsThreeDots className='w-5 h-5'/>
      </Button>
    </DropdownTrigger>
    <DropdownMenu aria-label="Static Actions">
      <DropdownItem as={Link} href='/blog/edit/123' key="edit">Edit</DropdownItem>
      <DropdownItem key="delete" className="text-danger" color="danger">
        Delete 
      </DropdownItem>
    </DropdownMenu>
  </Dropdown>
  )
}

export default BlogActionMenu
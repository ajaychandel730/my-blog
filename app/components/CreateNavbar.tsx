import React from 'react';
import Image from 'next/image';
import TopicsDropdown from './TopicsDropdown';
import SigninBtn from './SigninBtn';
import AuthSessionProvider from './AuthSessionProvider';
import { Button } from '@nextui-org/button';

const Navbar = () => {
  return (
    <div className=' flex items-center justify-between  h-24 bg-gray-50 border-gray-300 border-b fixed z-50   top-0 right-0 left-0 px-10'>
          {/* left section */}
          <div className='flex items-center h-full gap-2'>
               <Image 
                width={100}
                height={100}
                alt='logo picture'
                src={"https://nextjs.org/icons/next.svg"}
               />
              <TopicsDropdown/>
          </div>
          {/* right section */}
          <div className='flex items-center h-full gap-2'>
            <Button>Publish</Button>
            <Button>Save draft</Button>
          </div>
    </div>
  )
}

export default Navbar
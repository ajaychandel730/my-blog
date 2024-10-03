import React from 'react';
import Image from 'next/image';
import TopicsDropdown from './TopicsDropdown';
import { Button } from '@nextui-org/button';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between  h-24 bg-red-200 absolute top-0 right-0 left-0 px-2'>
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
              <Button size="md" color='primary'>Sigin in</Button>
          </div>
    </div>
  )
}

export default Navbar
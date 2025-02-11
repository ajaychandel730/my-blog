import BlogContent from '@/app/components/blogs/BlogContent';
import {Spinner} from '@nextui-org/spinner';
import React, { Suspense } from 'react';

type Params  = {
  params : Promise<{slug:string}>
};

const page = async ({params}:Params) => {
  const blogId = (await params).slug;
   

  return (
    <div className='flex w-full p-4 flex-col items-center '>
        <Suspense fallback={<Spinner size='md' color='primary'/>}>
         <BlogContent blogId={blogId}/>
        </Suspense>
    </div>
  )
}

export default page;
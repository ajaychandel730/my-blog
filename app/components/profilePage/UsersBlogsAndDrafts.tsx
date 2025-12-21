"use client";
import React from 'react'
import {Tabs, Tab} from "@heroui/tabs";
import UserPublishBlogs from './UserPublishBlogs';
import UserDrafts from './UserDrafts';
import { BlogType } from '@/types/blog';



type Props = {
  PublishBlogItemSkeleton : React.JSX.Element;
}

const UsersBlogsAndDrafts = ({PublishBlogItemSkeleton}:Props) => {
  
  return (
    <div className="flex w-full min-h-[600px] flex-col items-center mt-10 p-2  rounded-md ">
    <Tabs   variant='underlined' color='primary' size="lg" aria-label="Blogs and drafts tabs" className='w-full flex'>
      <Tab key="blogs" title={"Published"} className='w-full'>
        <UserPublishBlogs PublishBlogItemSkeleton={PublishBlogItemSkeleton}/>
      </Tab>
      <Tab key="drafts" title={"Draft"} className='w-full'>
        <UserDrafts PublishBlogItemSkeleton={PublishBlogItemSkeleton}/>
      </Tab>
    </Tabs>
  </div>
  )
}

export default UsersBlogsAndDrafts;

import React from 'react';
import BlogEditor from '@/app/components/blogs/BlogEditor';
import CreateNavbar from '@/app/components/blogs/CreateNavbar';
import StoreProvider from '@/app/StoreProvider';
import ToastProvider from '@/app/ToastProvider';

const EditPage = () => {
  return (
    <>
    <CreateNavbar />
    <div className="flex !pt-[7rem] flex-col items-center  min-h-screen px-2 md:p-8 pb-20  font-[family-name:var(--font-geist-sans)]">
      <StoreProvider>
        <BlogEditor />
      </StoreProvider>
    <ToastProvider/>
  </div>
  </>
  )
}

export default EditPage;
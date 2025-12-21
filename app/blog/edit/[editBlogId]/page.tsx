import React from "react";
import BlogEditor from "@/app/components/blogs/BlogEditor";
import CreateNavbar from "@/app/components/blogs/CreateNavbar";
import StoreProvider from "@/app/StoreProvider";

const EditPage = async () => {

  return (
    <>
      <div className="flex !pt-[7rem] flex-col w-full items-center  min-h-screen px-2 md:p-8 pb-20  font-[family-name:var(--font-geist-sans)]">
          <CreateNavbar />
          <StoreProvider>
            <BlogEditor type="blog" />
          </StoreProvider>
      </div>
    </>
  );
};

export default EditPage;

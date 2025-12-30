import React from "react";
import CreateNavbar from "@/app/components/blogs/CreateNavbar";
import ClientBlogEditor from "@/app/components/blogs/ClientBlogEditor";

const EditPage = async () => {

  return (
    <>
      <div className="flex !pt-[7rem] flex-col w-full items-center  min-h-screen px-2 md:p-8 pb-20  font-[family-name:var(--font-geist-sans)]">
          <CreateNavbar />
          <ClientBlogEditor type="blog"/>
      </div>
    </>
  );
};

export default EditPage;

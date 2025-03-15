import React, { Suspense } from "react";
import BlogEditor from "@/app/components/blogs/BlogEditor";
import CreateNavbar from "@/app/components/blogs/CreateNavbar";
import StoreProvider from "@/app/StoreProvider";
import ToastProvider from "@/app/ToastProvider";

const EditPage = async ({
  params,
}: {
  params: Promise<{ editBlogId: string }>;
}) => {
  const { editBlogId } = await params;
  console.log("edit page editBlogId: ", editBlogId);

  return (
    <>
      <CreateNavbar editBlogId={editBlogId} />
      <div className="flex !pt-[7rem] flex-col items-center  min-h-screen px-2 md:p-8 pb-20  font-[family-name:var(--font-geist-sans)]">
        <StoreProvider>
          <BlogEditor />
        </StoreProvider>
        <ToastProvider />
      </div>
    </>
  );
};

export default EditPage;

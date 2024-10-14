"use client";
import { Button } from "@nextui-org/button";
import { BsUpload } from "react-icons/bs";
import React, { useRef } from "react";

const BlogImage = () => {
  const fileRef = useRef<HTMLInputElement>(null);

  return (
    <div className=" aspect-video flex items-center justify-center bg-gray-100  rounded-lg ">
      <input ref={fileRef} type="file" className="hidden" />
      <Button
      isLoading
       startContent = {<BsUpload/>}
        onPress={() => {
          fileRef?.current?.click();
        }}
        color="default"
        className="bg-gray-50"
      >
        Upload image
      </Button>
    </div>
  );
};

export default BlogImage;

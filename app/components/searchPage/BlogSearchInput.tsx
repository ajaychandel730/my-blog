"use client";
import { Input } from "@heroui/input";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const BlogSearchInput = () => {
  const router = useRouter();
  const [query, setQuery] = useState<string>("");

  const onKeyHandler = (
    event: React.KeyboardEvent<HTMLInputElement> | KeyboardEvent
  ) =>{
    const keyType = event.key;
     
    if(keyType == "Enter" && query.length > 0){
       router.push(`/blog/search/${query.toString()}`);
    }
  };


  return (
    <div className="mt-4 flex items-center justify-start w-full">
      <Input
        onKeyDown={onKeyHandler}
        onValueChange={(query:string)=>{setQuery(query)}}
        startContent={<FiSearch className="w-5 h-5 " />}
        placeholder="Type to search"
        size="lg"
        isClearable
        color="default"
        label="Search blogs"
        value={query}
        defaultValue="hi"
        className="max-w-xs text-lg"
      />
    </div>
  );
};

export default BlogSearchInput;

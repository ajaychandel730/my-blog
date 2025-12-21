"use client";
import { Input } from "@heroui/input";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SearchIcon } from "lucide-react";

const BlogSearchInput = () => {
  const router = useRouter();
  const [query, setQuery] = useState<string>("");

  const onKeyHandler = (
    event: React.KeyboardEvent<HTMLInputElement> | KeyboardEvent
  ) => {
    const keyType = event.key;

    if (keyType == "Enter" && query.length > 0) {
      router.push(`/blogs/search/${query.toString()}`);
    }
  };

  return (
    // <div className="mt-4 flex items-center justify-start w-full">
      <Input
        onKeyDown={onKeyHandler}
        onValueChange={(query: string) => {
          setQuery(query);
        }}
        startContent={<SearchIcon className="w-5 h-5 " />}
        placeholder="Type to search"
        size="lg"
        isClearable
        color="default"
        label="Search blogs"
        value={query}
        className="max-w-xs text-lg z-0"
      />
    // </div>
  );
};

export default BlogSearchInput;

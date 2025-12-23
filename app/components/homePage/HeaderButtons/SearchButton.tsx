"use client";
import React from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@heroui/button";

const SearchButton = () => {
  return (
    <Button
      as = {Link}
      isIconOnly
      variant="light"
      href={"/blogs/category/all"}
      className="inline-flex px-0 w-fit items-center sm:px-4 sm:py-2 rounded-full sm:rounded-lg text-gray-700"
      aria-label="Search"
    >
      <Search className="w-5 h-5" />
      <span className="hidden sm:inline px-2">Search</span>
    </Button>
  );
};

export default SearchButton;

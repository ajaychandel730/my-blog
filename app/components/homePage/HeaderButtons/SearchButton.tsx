"use client";
import React from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@heroui/button";

const SearchButton = () => {
  return (
    <Button
      as = {Link}
      variant="light"
      href={"/blogs/category/all"}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
      aria-label="Search"
    >
      <Search className="w-5 h-5" />
      <span className="hidden sm:inline">Search</span>
    </Button>
  );
};

export default SearchButton;

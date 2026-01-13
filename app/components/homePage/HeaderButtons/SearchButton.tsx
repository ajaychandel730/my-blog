"use client";
import React from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@heroui/button";

const SearchButton = () => {
  return (
    <Button
      as={Link}
      variant="light"
      href="/blogs/search/all"
      className="inline-flex px-0 w-fit items-center sm:px-4 sm:py-2 rounded-full sm:rounded-lg text-foreground text-sm dark:hover:bg-midnight-800"
      aria-label="Search blogs"
    >
      <Search className="w-5 h-5" aria-hidden="true" />
      <span className="hidden sm:inline px-1">Search</span>
    </Button>
  );
};

export default SearchButton;

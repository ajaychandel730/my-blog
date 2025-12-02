import React from "react";
import Link from "next/link";
import { Search } from "lucide-react";

const SearchButton = () => {
  return (
    <Link
      href={"/blogs"}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
      aria-label="Search"
    >
      <Search className="w-5 h-5" />
      <span className="hidden sm:inline">Search</span>
    </Link>
  );
};

export default SearchButton;

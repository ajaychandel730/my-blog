"use client";
import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const BlogCategoriesFilters = () => {
  const filters = ["All", "Technology", "ai", "Desgin", "Art"];
  const params = useParams<{type:string}>();
  const router = useRouter();
  const pathname = usePathname();
  
  const handleClick = (event:React.MouseEvent<HTMLButtonElement>)=>{
     const categoryValue = (event.target as HTMLButtonElement).innerText;
      const path = pathname.split("/").splice(0, 3).join("/");
      router.replace(`${path}/${categoryValue.toLowerCase()}`); 
  }

  return (
    <div className="w-full flex  items-center  p-2 space-x-4">
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          onClick={handleClick}
          className={`py-2 px-4 rounded-full  text-base ${
             params.type.toLowerCase() === filter.toLowerCase() ? "bg-blue-600 text-gray-50" :
            "bg-white text-black"
          } `}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default BlogCategoriesFilters;

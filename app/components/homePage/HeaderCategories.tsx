"use server";
import React from "react";
import { Button } from "@heroui/button";
import Link from "next/link";
import getTopFacet from "@/actions/getTopFacet";


const HeaderCategories = async() => {
   let filters:string[] = (await getTopFacet(6)).map(({_id})=> _id.toLowerCase()); 
    
   if(filters.length == 0){
      filters = ["technology", "ai", "health", "machine learning", "career", "remote"];
   }

  return (
    <>
      <div className="hidden  xl:flex items-center justify-center p-2 space-x-4">
        {filters.map((topic) => (
          <Button
            as={Link}
            key={topic}
            variant="light"
            type="button"
            href={`/blogs/search/${topic.split(" ").join("")}`}
            className={"py-2 px-4 rounded-full capitalize   text-sm"}
          >
            {topic}
          </Button>
        ))}
      </div>
    </>
  );
};

export default HeaderCategories;

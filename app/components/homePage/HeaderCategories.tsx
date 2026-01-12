"use server";
import React from "react";
import getTopFacet from "@/actions/getTopFacet";
import CategoryButton from "./CategoryButton";


const HeaderCategories = async() => {
   let filters:string[] = (await getTopFacet(6)).map(({_id})=> _id.toLowerCase()); 
    
   if(filters.length == 0){
      filters = ["technology", "ai", "health", "machine learning", "career", "remote"];
   }

  return (
    <>
      <div className="hidden  xl:flex items-center justify-center p-2 space-x-4">
        {filters.map((topic, idx) => (
          <CategoryButton topic={topic} key={topic}/>
        ))}
      </div>
    </>
  );
};

export default HeaderCategories;

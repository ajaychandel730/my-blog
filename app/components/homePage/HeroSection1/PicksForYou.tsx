"use server";
import React from "react";
import HeroHeader from "../heroSection/HeroHeader";
import PicksForYouCard from "./PicksForYouCard";
import getSearchPicks from "@/actions/getSearchPicks";
import { PicksBlogType } from "@/types/blog";
import toLocaleDateString from "@/utils/toLocaleDateString";

const PicksForYou = async () => {
  const result:PicksBlogType[] = await getSearchPicks();

   if(result.length == 0){
     return null;
   }

  return (
    <div className="w-full rounded-md bg-white dark:bg-midnight-900  min-h-[300px] p-4 space-y-4">
      <HeroHeader heading="Picks For You" />
      {
        result?.map(({_id, title, banner, date})=>(
          <PicksForYouCard 
           key={_id}
           _id={_id}
           title={title}
           banner={banner}
           date={toLocaleDateString(date)}
          />
        ))
      }
    </div>
  );
};

export default PicksForYou;

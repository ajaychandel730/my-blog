import React from "react";
import { MostLatestBlogType } from "@/types/blog";
import HightCountTopicCard from "./HightCountTopicCard";
import getHightCountFacetBlogs from '@/actions/getFacetsBlogs';
import HeroHeader from "../../heroSection/HeroHeader";

const HightCountTopicItems = async ({topFacet}:{topFacet:string}) => {
  const result: MostLatestBlogType[] = await getHightCountFacetBlogs([topFacet]);

  if (result.length == 0) {
    return null;
  }

  return (
    <>
    <HeroHeader id={topFacet.toLowerCase().split(" ").join("-")} heading={topFacet}/>
      {result?.map(({ _id, title, date, banner }) => (
        <HightCountTopicCard
          key={_id}
          _id={_id}
          title={title}
          date={date}
          banner={banner}
        />
      ))}
    </>
  );
};

export default HightCountTopicItems;

import React, { Suspense } from "react";
import HeroHeader from "../heroSection/HeroHeader";
import MostRecentBlogsSkeleton from "./MostRecentBlogsSkeleton";
import MostRecentBlogsItems from "./MostRecentBlogsItems";

const MostRecentBlogs = async () => {
 

  return (
    <>
      <HeroHeader heading="Most Latest" />
      <Suspense fallback={<MostRecentBlogsSkeleton/>}>
        <MostRecentBlogsItems/>
      </Suspense>
    </>
  );
};

export default MostRecentBlogs;

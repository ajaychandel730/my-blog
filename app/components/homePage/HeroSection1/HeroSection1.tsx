import React, { Suspense } from "react";
import MostRecentBlogs from "./MostRecentBlogs";
import PicksForYou from "./PicksForYou";
import Top15Topics from "./Top15Topics";
import HightCountTopicWrapper from "./HightCountTopicSection/HightCountTopicWrapper";
import HightCountWrapperSkeleton from "./HightCountTopicSection/HightCountWrapperSkeleton";
import PicksForYouSkeleton from "./PicksForYouSkeleton";
import Top15TopicsSkeleton from "./Top15TopicsSkeleton";

const HeroSection1 = async () => {
  
  return (
    <div className="w-full grid grid-col-2  lg:grid-cols-3 gap-2 min-h-[600px]">
      <section aria-labelledby="most-latest-blogs" className="lg:col-span-2 space-y-6">
        <MostRecentBlogs />
        <Suspense fallback={<HightCountWrapperSkeleton/>}>
             <HightCountTopicWrapper />
        </Suspense>
      </section>
      <div className="lg:space-y-4 grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-1 sticky top-20 h-fit">
        <Suspense fallback={<PicksForYouSkeleton/>}>
           <PicksForYou />
        </Suspense>
        <Suspense fallback={<Top15TopicsSkeleton/>}>
        <Top15Topics />
        </Suspense>
      </div>
    </div>
  );
};

export default HeroSection1;

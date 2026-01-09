"use server";
import React from "react";
import MostRecentBlogs from "./MostRecentBlogs";
import PicksForYou from "./PicksForYou";
import Top15Topics from "./Top15Topics";
import HightCountTopicWrapper from "./HightCountTopicSection/HightCountTopicWrapper";

const HeroSection1 = async () => {
  return (
    <section className="w-full grid grid-col-2 space-y-4 lg:grid-cols-3 gap-2 min-h-[600px]">
      <div className="lg:col-span-2 space-y-10">
        <MostRecentBlogs />
        <HightCountTopicWrapper />
      </div>
      <div className="lg:space-y-4 grid grid-cols-1 md:grid-cols-2  gap-4 lg:grid-cols-1 sticky top-20 h-fit">
        <PicksForYou />
        <Top15Topics />
      </div>
    </section>
  );
};

export default HeroSection1;

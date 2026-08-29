"use server";
import React, { Suspense } from "react";
import HeroWrapper from "./heroSection/HeroWrapper";
import HeroSection1 from "./HeroSection1/HeroSection1";
import HeroSection2 from "./HeroSection2/HeroSection2";
import ComponentErrorBoundary from "../ComponentErrorBoundary";
import HeroSection2Skeleton from "./HeroSection2/HeroSection2Skeleton";

const HomeMainSection = async () => {
  return (
    <div className="my-10 flex flex-col px-4 items-center mx-auto  w-full  xl:w-[1200px] 2xl:w-[1400px]  space-y-10">
      <HeroWrapper />
      <HeroSection1 />
      <Suspense fallback={<HeroSection2Skeleton />}>
        <HeroSection2 />
      </Suspense>
    </div>
  );
};

export default HomeMainSection;

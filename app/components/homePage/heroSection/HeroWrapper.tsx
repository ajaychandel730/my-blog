"use server";
import React, { Suspense } from "react";
import HeroSection from "./HeroSection";
import HeroSectionSkeleton from "./HeroSectionSkeleton";

const HeroWrapper = async () => {
  
  return (
    <Suspense fallback={<HeroSectionSkeleton />}>
      <HeroSection />
    </Suspense>
  );
};

export default HeroWrapper;

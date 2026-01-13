import React from "react";
import HeroHeader from "../heroSection/HeroHeader";
import { Skeleton } from "@heroui/skeleton";

const HeroSection2Skeleton = () => {
  return (
    <section aria-labelledby="blogs-categories" className="w-full space-y-4">
      <HeroHeader id="blogs-categories" heading={"Categories"} isIcon={false} />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-2 gap-y-4">
        {Array(6)
          .fill(1)
          .map((_, idx) => (
            <div key={idx} className=" min-h-[400px] rounded-lg overflow-hidden">
              <Skeleton className="w-full h-full" key={idx}></Skeleton>
            </div>
          ))}
      </div>
    </section>
  );
};

export default HeroSection2Skeleton;

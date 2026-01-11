import React from "react";
import BlogSmallLineCardSkeleton from "../heroSection/BlogSmallLineCardSkeleton";
import HeroHeader from "../heroSection/HeroHeader";

const PicksForYouSkeleton = () => {
  return (
    <div className="w-full rounded-md bg-white dark:bg-midnight-900  min-h-[300px] p-4 space-y-4">
      <HeroHeader heading="Picks For You" />
      {Array(6)
        .fill(1)
        .map((_, idx) => (
          <BlogSmallLineCardSkeleton key={idx} />
        ))}
    </div>
  );
};

export default PicksForYouSkeleton;

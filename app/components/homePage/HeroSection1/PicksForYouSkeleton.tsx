import React from "react";
import BlogSmallLineCardSkeleton from "../heroSection/BlogSmallLineCardSkeleton";
import HeroHeader from "../heroSection/HeroHeader";

const PicksForYouSkeleton = () => {
  return (
    <section aria-labelledby="picks-for-you" className="w-full rounded-md bg-white dark:bg-midnight-900  min-h-[300px] p-4 space-y-4">
      <HeroHeader id="picks-for-you" heading="Picks For You" />
      {Array(6)
        .fill(1)
        .map((_, idx) => (
          <BlogSmallLineCardSkeleton key={idx} />
        ))}
    </section>
  );
};

export default PicksForYouSkeleton;

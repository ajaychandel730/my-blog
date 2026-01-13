import React from "react";
import BlogSmallLineCardSkeleton from "../../heroSection/BlogSmallLineCardSkeleton";

const HightCountTopicItemsSkeleton = () => {
  return (
    <>
      {Array(5)
        .fill(1)
        .map((_, idx) => (
          <BlogSmallLineCardSkeleton key={idx} />
        ))}
    </>
  );
};

export default HightCountTopicItemsSkeleton;

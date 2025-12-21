"use client";
import React, { useEffect, useRef } from "react";

type Props = {
  setPage: React.Dispatch<React.SetStateAction<number>>;
};


const BlogsPagination = ({ setPage}: Props) => {
  const loadingRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          setPage((page) => page + 1);
        }
      },
      { rootMargin : "100px",  threshold: 0.1 }
    );

    if (loadingRef.current !== null) {
      intersectionObserver.observe(loadingRef.current);
    }

    return () => {
      intersectionObserver.disconnect();
    };
  }, []);

  return <div ref={loadingRef} className="w-full flex h-20"></div>;
};

export default BlogsPagination;

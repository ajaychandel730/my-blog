"use client";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  isLoading: boolean;
};

const BlogsPagination = ({ setPage, isLoading }: Props) => {
  const loadingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          setPage((page) => page + 1);
        }
      },
      { threshold: 1.0 }
    );

    if (loadingRef.current !== null) {
      intersectionObserver.observe(loadingRef.current);
    }

    return () => {
      intersectionObserver.disconnect();
    };
  }, [isLoading, setPage]);

  return <div ref={loadingRef} className="w-full flex h-10"></div>;
};

export default BlogsPagination;

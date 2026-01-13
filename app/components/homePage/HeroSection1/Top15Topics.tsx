"use server";
import React from "react";
import HeroHeader from "../heroSection/HeroHeader";
import getTopFacet from "@/actions/getTopFacet";
import Link from "next/link";

const Top15Topics = async () => {
  let topics: string[] = (await getTopFacet(21)).map(({_id})=> _id);

  if (topics.length == 0) {
    return null;
  }

  return (
    <section aria-labelledby="top-topics" className="w-full rounded-md bg-white dark:bg-midnight-900  min-h-[300px] p-4 space-y-4">
      <HeroHeader id="top-topics"  heading="Topics" />
      <ul role="list" className="flex flex-wrap gap-2 w-full">
        {topics?.map((topic) => (
          <li key={topic}>
            <Link
              href={`/blogs/search/${topic}`}
              className="inline-flex items-center px-3 py-1 max-w-40 text-sm font-medium
                       bg-gray-100 dark:bg-midnight-900 rounded-full truncate cursor-pointer
                      hover:bg-gray-200 dark:hover:bg-midnight-800 transition"
            >
              {topic}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Top15Topics;

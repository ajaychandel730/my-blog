import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import GetStartedButton from "./buttons/GetStartedButton";
import ViewBlogsButton from "./buttons/ViewBlogsButton";

const HeroWrapper = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-3xl text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-neutral-900">
          Welcome to
          <span className="ml-2 bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">
            BlogSpace
          </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-neutral-600 leading-relaxed">
          A platfrom where everyone can write, share, and explore amazing blogs
          on any topic you love.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <GetStartedButton />
          <ViewBlogsButton />
        </div>
      </div>
    </div>
  );
};

export default HeroWrapper;

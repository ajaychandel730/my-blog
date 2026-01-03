import React from "react";
import GetStartedButton from "./buttons/GetStartedButton";

const HeroWrapper = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-3xl text-center px-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-foreground">
          Welcome to
          <span className="ml-2 bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">
            BlogSpace
          </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl  text-foreground leading-relaxed">
          A platfrom where everyone can share, and explore amazing blogs
          on any topic you love.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <GetStartedButton />
        </div>
      </div>
    </div>
  );
};

export default HeroWrapper;

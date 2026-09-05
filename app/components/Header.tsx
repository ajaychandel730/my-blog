import React, { Suspense } from "react";
import SearchButton from "./homePage/HeaderButtons/SearchButton";
import LogoButton from "./homePage/HeaderButtons/LogoButton";
import AboutButton from "./homePage/HeaderButtons/AboutButton";
import ContactButton from "./homePage/HeaderButtons/ContactButton";
import HeaderCategories from "./homePage/HeaderCategories";
import getTopFacet from "@/actions/getTopFacet";
import HeaderCategoriesSkeleton from "./homePage/HeaderCategoriesSkeleton";

// dynamic imports
import dynamic from "next/dynamic";
const HeaderDropDownOptions = dynamic(
  () => import("./homePage/HeaderDropDownOptions"),
);
//
const Header = async () => {
  const getTopFacetPromise = getTopFacet(6);

  return (
    <header className="w-full border-b border-gray-200 dark:border-gray-700 box-border bg-background z-20  sticky top-0 right-0 left-0 ">
      <div className="flex items-center justify-between w-full h-16 ">
        {/* Logo */}
        {/* <div className="flex space-x-6"> */}
        <div className="flex items-center space-x-2">
          <HeaderDropDownOptions getTopFacetPromise={getTopFacetPromise} />
          <LogoButton />
        </div>

        {/* </div> */}

        {/* categories */}
        <Suspense fallback={<HeaderCategoriesSkeleton />}>
          <HeaderCategories />
        </Suspense>
        {/* Buttons */}
        <nav className="flex items-center space-x-3">
          <SearchButton />
          <AboutButton />
          <ContactButton />
        </nav>
      </div>
    </header>
  );
};

export default Header;

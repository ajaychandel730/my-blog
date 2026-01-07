import React from "react";
import SearchButton from "./homePage/HeaderButtons/SearchButton";
import LogoButton from "./homePage/HeaderButtons/LogoButton";
import AboutButton from "./homePage/HeaderButtons/AboutButton";
import ContactButton from "./homePage/HeaderButtons/ContactButton";
import HeaderCategories from "./homePage/HeaderCategories";
import HeaderDropDownOptions from "./homePage/HeaderDropDownOptions";

const Header = () => {
  return (
    <header className="w-full border-b border-gray-200 dark:border-gray-700 box-border bg-background z-20  fixed top-0 right-0 left-0 ">
      <div className="flex items-center justify-between xl:justify-around w-full h-16 px-4">
        {/* Logo */}
        <div className="flex space-x-2">
          <HeaderDropDownOptions />
          <LogoButton />
        </div>

        {/* categories */}
        <HeaderCategories />
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

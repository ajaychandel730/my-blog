import React from "react";
import SearchButton from "./homePage/HeaderButtons/SearchButton";
import LogoButton from "./homePage/HeaderButtons/LogoButton";
import AboutButton from "./homePage/HeaderButtons/AboutButton";
import ContactButton from "./homePage/HeaderButtons/ContactButton";


const Header = () => {

  return (
    <header className="w-full border-b border-gray-200 dark:border-gray-700 box-border bg-background  z-20  fixed top-0 right-0 left-0 ">
      <div className="px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <LogoButton />
          {/* Buttons */}
          <nav className="flex items-center space-x-3">
            <SearchButton />
            <AboutButton/>
            <ContactButton/>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

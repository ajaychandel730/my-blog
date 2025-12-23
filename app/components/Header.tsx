import React from "react";
import AuthSessionProvider from "./AuthSessionProvider";
import UserProfile from "./UserProfile";
import CreateBlogButton from "./homePage/HeaderButtons/CreateBlogButton";
import SearchButton from "./homePage/HeaderButtons/SearchButton";
import LogoButton from "./homePage/HeaderButtons/LogoButton";


const Header = () => {

  return (
    <header className="w-full border-b border-gray-200 box-border bg-white  z-20  fixed top-0 right-0 left-0 ">
      <div className="px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <LogoButton />
          {/* Buttons */}
          <nav className="flex items-center space-x-3">
            <SearchButton />
            <CreateBlogButton />
            <AuthSessionProvider>
              <UserProfile />
            </AuthSessionProvider>
            {/* <SideBarMenu /> */}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

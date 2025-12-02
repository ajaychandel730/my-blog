import React from "react";
import AuthSessionProvider from "./AuthSessionProvider";
import UserProfile from "./UserProfile";
import CreateBlogButton from "./homePage/HeaderButtons/CreateBlogButton";
import SideBarMenu from "./SideBarMenu";
import SearchButton from "./homePage/HeaderButtons/SearchButton";
import LogoButton from "./homePage/HeaderButtons/LogoButton";

const Header = () => {
  return (
    <header className="w-full border-b border-gray-200 box-border bg-white  z-50  fixed top-0 right-0 left-0 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <LogoButton />
          {/* Buttons */}
          <nav className="flex items-center gap-3">
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

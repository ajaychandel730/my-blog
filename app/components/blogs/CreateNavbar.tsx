"use client";
import React from "react";
import dynamic from "next/dynamic";
import LogoButton from "../homePage/HeaderButtons/LogoButton";
// ---------------dynamic
const StoreProvider = dynamic(() => import("@/app/StoreProvider"), { ssr: false });
const AuthSessionProvider = dynamic(() => import("../AuthSessionProvider"), { ssr: false });
const UserProfile = dynamic(() => import("../UserProfile"), { ssr: false });
const SaveDraftButton = dynamic(() => import("./SaveDraftButton"), { ssr: false });
const PublishButton = dynamic(() => import("./PublishButton"), { ssr: false });
const NewBlogButton = dynamic(() => import("./NewBlogButton"), { ssr: false });
//----------------------------->

const CreateNavbar = ({
  showNewBlogButton = false,
}: {
  showNewBlogButton?: boolean;
}) => {


  return (
    <div className=" flex items-center justify-between h-16 bg-gray-50 border-gray-300 border-b fixed z-20   top-0 right-0 left-0 px-10">
      {/* left section */}
      <div className="flex items-center h-full gap-2">
        <LogoButton />
      </div>
      {/* right section */}
      <div className="flex items-center h-full space-x-4">
        <StoreProvider>
          {showNewBlogButton && <NewBlogButton />}
          <AuthSessionProvider>
            <SaveDraftButton />
            <PublishButton />
            <UserProfile />
          </AuthSessionProvider>
        </StoreProvider>
      </div>
    </div>
  );
};

export default CreateNavbar;

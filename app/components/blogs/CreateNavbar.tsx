import React from "react";
import PublishButton from "./PublishButton";
import SaveDraftButton from "./SaveDraftButton";
import AuthSessionProvider from "../AuthSessionProvider";
import NewBlogButton from "./NewBlogButton";
import StoreProvider from "@/app/StoreProvider";
import LogoButton from "../homePage/HeaderButtons/LogoButton";
// import StoreProvider from "@/app/StoreProvider";

const CreateNavbar = ({editBlogId}:{editBlogId?:string}) => {

  return (
    <div className=" flex items-center justify-between h-16 bg-gray-50 border-gray-300 border-b fixed z-50   top-0 right-0 left-0 px-10">
      {/* left section */}
      <div className="flex items-center h-full gap-2">
        <LogoButton/>
      </div>
      {/* right section */}
      <div className="flex items-center h-full gap-2">
        <StoreProvider>
           {!editBlogId && <NewBlogButton />}
          <AuthSessionProvider>
            <SaveDraftButton />
            <PublishButton />
          </AuthSessionProvider>
        </StoreProvider>
      </div>
    </div>
  );
};

export default CreateNavbar;

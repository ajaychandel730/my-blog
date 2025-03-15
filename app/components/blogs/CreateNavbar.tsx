import React from "react";
import Image from "next/image";
import Link from "next/link";
import PublishButton from "./PublishButton";
import SaveDraftButton from "./SaveDraftButton";
import AuthSessionProvider from "../AuthSessionProvider";
import NewBlogButton from "./NewBlogButton";
import StoreProvider from "@/app/StoreProvider";
// import StoreProvider from "@/app/StoreProvider";

const Navbar = ({editBlogId}:{editBlogId?:string}) => {

  return (
    <div className=" flex items-center justify-between  h-24 bg-gray-50 border-gray-300 border-b fixed z-50   top-0 right-0 left-0 px-10">
      {/* left section */}
      <div className="flex items-center h-full gap-2">
        <Link href={"/"}>
          <Image
            width={100}
            height={100}
            alt="logo picture"
            src={"https://nextjs.org/icons/next.svg"}
          />
        </Link>
      </div>
      {/* right section */}
      <div className="flex items-center h-full gap-2">
        <StoreProvider>
           {!editBlogId && <NewBlogButton />}
          <AuthSessionProvider>
            <PublishButton />
            <SaveDraftButton />
          </AuthSessionProvider>
        </StoreProvider>
      </div>
    </div>
  );
};

export default Navbar;

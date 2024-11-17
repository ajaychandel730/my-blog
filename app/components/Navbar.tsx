import React from "react";
import Image from "next/image";
import TopicsDropdown from "./TopicsDropdown";
import SigninBtn from "./SigninBtn";
import AuthSessionProvider from "./AuthSessionProvider";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { AiOutlinePlus } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between  h-24 bg-gray-50 border-gray-300 border-b  fixed top-0 right-0 left-0 px-10">
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
        <TopicsDropdown />
      </div>
      {/* right section */}

      <div className="flex items-center h-full gap-2">
        <Link href={"/blog/create"}>
          <Button startContent={<AiOutlinePlus />}>Create blog</Button>
        </Link>
        <AuthSessionProvider>
          <SigninBtn />
        </AuthSessionProvider>
      </div>
    </div>
  );
};

export default Navbar;

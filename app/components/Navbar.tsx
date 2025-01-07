import React from "react";
import Image from "next/image";
import TopicsDropdown from "./TopicsDropdown";
import SigninBtn from "./SigninBtn";
import AuthSessionProvider from "./AuthSessionProvider";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import UserProfile from "./UserProfile";

const Navbar = () => {
  return (
    <div className="flex z-50 items-center justify-between  h-24 bg-gray-50 border-gray-300 border-b  fixed top-0 right-0 left-0 px-10">
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

      <div className="flex items-center h-full gap-4">
        <Button
          as={Link}
          href="/blog"
          size="sm"
          isIconOnly
          className="bg-transparent "
        >
          <AiOutlineSearch className="w-full h-full text-gray-700" />
        </Button>

        <Button
          as={Link}
          href={"/blog/create"}
          startContent={<AiOutlinePlus />}
        >
          Create blog
        </Button>
        <AuthSessionProvider>
          <UserProfile/>
        </AuthSessionProvider>
      </div>
    </div>
  );
};

export default Navbar;

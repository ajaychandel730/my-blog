"use client";
import { useSession } from "next-auth/react";
import React from "react";
import { User } from "@heroui/user";
import {
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownTrigger,
} from "@heroui/dropdown";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import SigninButton from "./homePage/HeaderButtons/SigninButton";
import UserSkeleton from "./UserSkeleton";

const UserProfile = () => {
  const session = useSession();
  const { data } = session;
  console.log("profile:", data);
  const isAuthenticated = session.status === "authenticated";
  const router = useRouter();
  const user = {
    name: "",
    image: "",
    email: "",
    ...data?.user,
  };

  if (session.status === "loading") {
    return <UserSkeleton />;
  }

  return isAuthenticated ? (
    <Dropdown shouldBlockScroll={false}>
      <DropdownTrigger>
        <User
          className="cursor-pointer"
          description={<p className="hidden sm:block turncate">{"@" + user.email?.split("@")[0].slice(0, 10)}</p>}
          avatarProps={{
            src: user.image,
          }}
          name={<p className="hidden sm:block">{user.name}</p>}
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="User Actions" variant="flat">
        <DropdownItem
          isReadOnly
          key="User"
          className="h-14 gap-2 cursor-default"
        >
          <p className="font-semibold text-sm">Signed in as</p>
          <p className="font-semibold text-sm">{user.email}</p>
        </DropdownItem>
        <DropdownItem
          onPress={() => {
            router.push("/user/profile");
          }}
          aria-label="User profile button"
          key="profile"
        >
          Profile
        </DropdownItem>
        <DropdownItem color="danger" onPress={() => signOut()} key="signOut">
          Sign out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ) : (
    <SigninButton />
  );
};

export default UserProfile;

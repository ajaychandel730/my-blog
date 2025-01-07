"use client";
import { useSession } from "next-auth/react";
import React from "react";
import { User } from "@nextui-org/user";
import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import SigninBtn from "./SigninBtn";
import { signOut } from "next-auth/react";

const UserProfile = () => {
  const session = useSession();

  const { data } = session;
  const isAuthenticated = session.status === "authenticated";

  console.log(session);
  const user = {
    name: "",
    image: "",
    email: "",
    ...data?.user,
  };

  return isAuthenticated ? (
    <Dropdown>
      <DropdownTrigger>
        <User
          className="cursor-pointer"
          description={"@" + user.email?.split("@")[0].slice(0, 10)}
          avatarProps={{
            src: user.image,
          }}
          name={user.name}
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
        <DropdownItem key="profile">Profile</DropdownItem>
        <DropdownItem color="danger" onPress={() => signOut()} key="signOut">
          Sign out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ) : (
    <SigninBtn />
  );
};

export default UserProfile;

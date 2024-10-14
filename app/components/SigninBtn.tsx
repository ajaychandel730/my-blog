"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { toast } from "react-toastify";
import { signOut, useSession } from "next-auth/react";

const SigninBtn = () => {
  const session = useSession();

  return session.status === "authenticated" ? (
    <Button onPress={()=> {signOut()}} size="md" color="primary">
      Sign out
    </Button>
  ) : (
    <Link href={"/signin"}>
      <Button size="md" color="primary">
        Sign in
      </Button>
    </Link>
  );
};

export default SigninBtn;

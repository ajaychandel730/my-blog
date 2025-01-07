"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import {useSession } from "next-auth/react";

const SigninBtn = () => {

  return (
    <Button as={Link} href="/signin" size="md" color="primary">
      Sign in
    </Button>
  );
};

export default SigninBtn;

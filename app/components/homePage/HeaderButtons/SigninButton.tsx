"use client";
import React from "react";
import { LogIn } from "lucide-react";
import Link from "next/link";
import { Button } from "@heroui/button";

const SigninButton = () => {
  return (
    <Button
      as = {Link}
      href={"/admin/signin"}
      className="inline-flex items-center sm:gap-2 sm:px-4 sm:py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
      aria-label="Sign In"
    >
      <LogIn className="w-5 h-5" />
      <span>Sign In</span>
    </Button>
  );
};

export default SigninButton;

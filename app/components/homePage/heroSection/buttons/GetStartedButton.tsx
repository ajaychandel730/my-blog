"use client";
import { Button } from "@heroui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const GetStartedButton = () => {
  return (
    <Button
      as={Link}
      size="md"
      radius="full"
      href="/blogs/category/all"
      className=" bg-slate-800 text-white "
    >
      <span>Get Started</span>
      <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
    </Button>
  );
};

export default GetStartedButton;

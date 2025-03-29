"use client";
import { Button } from "@heroui/button";
import { Tooltip } from "@heroui/tooltip";
import Link from "next/link";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

type Props = {
  color?:
    | "default"
    | "primary"
    | "warning"
    | "secondary"
    | "success"
    | "danger";
};

const CreateBlogButton = ({ color = "default" }: Props) => {

  return (
    <>
        <Button
          className="hidden md:inline-flex"
          as={Link}
          color={color}
          href={"/blog/create"}
          startContent={<AiOutlinePlus />}
        >
          Create blog
        </Button>
    </>
  );
};

export default CreateBlogButton;

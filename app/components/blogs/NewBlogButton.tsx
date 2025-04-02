"use client";
import { useAppDispatch } from "@/lib/hooks";
import { isReseting, resetBlog, setBlog } from "@/lib/store";
import { Button } from "@heroui/button";
import React, { useTransition } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { toast } from "react-toastify";

const NewBlogButton = () => {
  const dispatch = useAppDispatch();
  const [isPending, startTransition] = useTransition();

  const handleNewBlogClick = () => {
    const confirmReset = window.confirm(
      "Starting a new blog will delete all unsaved progress. Do you want to continue?"
    );
    if (!confirmReset) return;
    localStorage.removeItem("blog");
    dispatch(isReseting(true));

    setTimeout(() => {
      dispatch(resetBlog());
      toast.success("New blog created successfully! Start writing now.");
    }, 0);
  };

  return (
    <>
      <Button
        startContent={<AiOutlinePlus className="w-5 h-5" />}
        onPress={handleNewBlogClick}
        color="default"
        size="md"
        className="hidden lg:inline-flex"
      >
        New blog
      </Button>
      <Button
        className="lg:hidden"
        isIconOnly
        size="md"
        radius="full"
        onPress={handleNewBlogClick}
      >
        <AiOutlinePlus className="w-5 h-5" />
      </Button>
    </>
  );
};

export default NewBlogButton;

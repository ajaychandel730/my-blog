"use client";
import { useAppDispatch } from "@/lib/hooks";
import { isReseting, resetBlog } from "@/lib/store";
import { Button } from "@heroui/button";
import React, { useTransition } from "react";
import { PlusIcon } from "lucide-react";
import { toast } from "sonner";

const NewBlogButton = () => {
  const dispatch = useAppDispatch();

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
        role="button"
        aria-label="Add new blog button"
        startContent={<PlusIcon className="w-5 h-5" />}
        onPress={handleNewBlogClick}
        color="default"
        variant="light"
        size="md"
        className="hidden lg:inline-flex darkButton"
      >
        New blog
      </Button>
      <Button
       role="button"
        aria-label="Add new blog button"
        className="lg:hidden darkButton"
        variant="bordered"
        isIconOnly
        size="md"
        radius="full"
        onPress={handleNewBlogClick}
      >
        <PlusIcon className="w-5 h-5" />
      </Button>
    </>
  );
};

export default NewBlogButton;

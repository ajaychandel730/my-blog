"use client";
import React from "react";
import { Button } from "@heroui/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";
import { useDisclosure } from "@heroui/modal";
import { BsThreeDots } from "react-icons/bs";
import { useParams, useRouter } from "next/navigation";
import BlogDeleteModal from "./BlogDeleteModal";

const BlogActionMenu = () => {
  const { slug } = useParams();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();

  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Button
            size="md"
            radius="full"
            className="px-2"
            isIconOnly
            variant="light"
          >
            <BsThreeDots className="w-5 h-5" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem
            onPress={() => {
              router.push(`/blog/edit/${slug}`);
            }}
            key="edit"
          >
            Edit
          </DropdownItem>
          <DropdownItem
            onPress={onOpen}
            key="delete"
            className="text-danger"
            color="danger"
          >
            Delete
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <BlogDeleteModal
        slug={slug as string}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
    </>
  );
};

export default BlogActionMenu;

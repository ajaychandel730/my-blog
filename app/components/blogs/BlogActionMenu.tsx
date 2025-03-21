"use client";
import { Button } from "@heroui/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";
 import { useDisclosure } from "@heroui/modal";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import Link from "next/link";
import { useParams } from "next/navigation";
import BlogDeleteModal from "./BlogDeleteModal";

const BlogActionMenu = () => {
  const { slug } = useParams();
  const {isOpen, onOpen, onOpenChange}  = useDisclosure();

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
          <DropdownItem as={Link} href={`/blog/edit/${slug}`} key="edit">
            Edit
          </DropdownItem>
          <DropdownItem onPress={onOpen} key="delete" className="text-danger" color="danger">
            Delete
          </DropdownItem>
        </DropdownMenu>
      </Dropdown> 
      <BlogDeleteModal slug={slug as string} isOpen={isOpen} onOpenChange={onOpenChange}/>
    </>
  );
};

export default BlogActionMenu;
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import { Button } from "@heroui/button";
import Link from "next/link";
import { Ellipsis } from "lucide-react";
import { BlogType } from "@/types/blog";

type Props = {
  _id: string;
  tab: string;
  onOpen: () => void;
};

export default function BlogItemOptionsDropdown({ _id, tab, onOpen }: Props) {
  return (
    <Dropdown className="dark:bg-midnight-800">
      <DropdownTrigger>
        <Button variant="light" type="button" aria-label="blog menu" className="darkGrayButton" isIconOnly>
             <Ellipsis className="w-5 h-5"/>
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions" >
         <DropdownItem as={Link} href={tab === BlogType.published ? `/admin/blog/edit/${_id}` : `/admin/draft/edit/${_id}`} key="edit">
           Edit
        </DropdownItem>        
        <DropdownItem className={`${tab === BlogType.published ? "" : "hidden"}`}  as={Link} href={`/blog/${_id}`} key="view">
           View
        </DropdownItem>
        <DropdownItem onPress={onOpen} key="delete" className="text-danger" color="danger">
           Delete
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

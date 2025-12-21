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

type Props = {
  _id: string;
  tab: string;
  onOpen: () => void;
};

export default function BlogItemOptionsDropdown({ _id, tab, onOpen }: Props) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="light" isIconOnly>
             <Ellipsis className="w-5 h-5"/>
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem as={Link} href={tab == "Blogs" ? `/blog/${_id}` : `/draft/edit/${_id}`} key="view">
           View
        </DropdownItem>
        <DropdownItem onPress={onOpen} key="delete" className="text-danger" color="danger">
           Delete
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

"use client";
import React from "react";
import { Button } from "@heroui/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";
import { ListFilter } from "lucide-react";
import { BlogFilter } from "@/types/blog";
import convertLowerCaseIntocammelCase from "@/lib/convertLowerCaseIntocammelCase";

interface Props {
  filters: BlogFilter[];
  handleClick: (value: string) => void;
}

const CategoriesFilterListDropdown = ({ filters, handleClick }: Props) => {
  return (
    <Dropdown className="dark:bg-midnight-800">
      <DropdownTrigger>
        <Button variant="shadow" color="primary" startContent={<ListFilter />}>
          Categories
        </Button>
      </DropdownTrigger>
      <DropdownMenu
  
        onAction={(key) => {
          handleClick(key as string);
        }}
        aria-label="Actions"
        items={[{ _id: "all", count: 0 }, ...filters]}
      >
        {({ _id, count }) => (
          <DropdownItem key={_id}>
            {" "}
            {convertLowerCaseIntocammelCase( _id)} {count == 0 ? "" : `(${count})`}{" "}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
};

export default CategoriesFilterListDropdown;

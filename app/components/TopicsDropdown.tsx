"use client";
import React from "react";
// next ui imports
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import { Button } from "@heroui/button";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
//
const TopicsDropdown = () => {
  return (
      <Dropdown>
        <DropdownTrigger>
          <Button endContent={<ChevronDownIcon className="w-5 h-5"/>} className="bg-transparent" size="lg">
            Topics
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem key="new">Science</DropdownItem>
          <DropdownItem key="copy">Fitness</DropdownItem>
          <DropdownItem key="edit">Marketing</DropdownItem>
        </DropdownMenu>
      </Dropdown>
  );
};

export default TopicsDropdown;

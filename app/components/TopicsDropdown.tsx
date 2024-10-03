"use client";
import React from "react";
// next ui imports
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
//
const TopicsDropdown = () => {
  return (
      <Dropdown>
        <DropdownTrigger>
          <Button className="bg-transparent" size="lg">
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

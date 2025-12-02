"use client";

import { Listbox, ListboxItem } from "@heroui/listbox";
import Link from "next/link";
import React from "react";
import { PlusIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const MenuList = () => {
  return (
    <Listbox  aria-label="Actions" onAction={(key) => key}>
      <ListboxItem
        startContent={<MagnifyingGlassIcon className="w-5 h-5" />}
        key="search"
        as={Link}
        href="/blog"
      >
        Search
      </ListboxItem>
      <ListboxItem
        startContent={<PlusIcon className="w-5 h-5" />}
        key="create blog"
        as={Link}
        href="/blog/create"
      >
        Create blog
      </ListboxItem>
    </Listbox>
  );
};

export default MenuList;

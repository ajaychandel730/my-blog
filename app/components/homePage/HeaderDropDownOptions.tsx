"use client";
import React, { Suspense, use } from "react";
import { Button } from "@heroui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
} from "@heroui/drawer";
import { useDisclosure } from "@heroui/modal";
import { MenuIcon } from "lucide-react";
import FullLogoButton from "./HeaderButtons/FullLogoButton";
import Link from "next/link";
import { SearchFacet } from "@/types/blog";
import DropdownMenuListSkeleton from "./DropdownMenuListSkeleton";
import HeaderDropDownList from "./HeaderDropDownList";

type Props = {
  getTopFacetPromise: Promise<SearchFacet[]>;
};

const HeaderDropDownOptions = ({ getTopFacetPromise }: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button className="xl:hidden" variant="light" isIconOnly onPress={onOpen}>
        <MenuIcon className="w-5 h-5" />
      </Button>
      <Drawer
        size="xs"
        placement="left"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">
                <FullLogoButton />
              </DrawerHeader>
              <DrawerBody>
                <Suspense fallback={<DropdownMenuListSkeleton />}>
                  <HeaderDropDownList getTopFacetPromise={getTopFacetPromise} />
                </Suspense>
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default HeaderDropDownOptions;

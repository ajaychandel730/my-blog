"use client";
import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@heroui/drawer";
import { Button } from "@heroui/button";
import { useDisclosure } from "@heroui/modal";
import MenuList from "./MenuList";
import { Bars3Icon } from "@heroicons/react/24/outline";

const SideBarMenu = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        className="md:hidden"
        isIconOnly
        radius="full"
        size="md"
        variant="light"
        startContent={<Bars3Icon className="w-5 h-5" />}
        onPress={onOpen}
      ></Button>
      <Drawer size="sm" isOpen={isOpen} onOpenChange={onOpenChange}>
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">
                Menu
              </DrawerHeader>
              <DrawerBody>
                <MenuList />
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideBarMenu;

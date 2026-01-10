"use client";
import React from "react";
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
import useSWR from "swr";
import { getErrorMessage } from "@/utils/errors";
import { toast } from "sonner";
import { BlogFilter } from "@/types/blog";
import { useParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const fetchFiltersList = async (url: string) => {
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });
    const data = await res.json();
    if (data.status == "ok") {
      return data;
    }
  } catch (err) {
    toast.error(getErrorMessage(err));
  }
};

const HeaderDropDownOptions = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { data, isLoading } = useSWR(
    "/api/blogs/category/filters",
    fetchFiltersList
  );

  const params = useParams<{ type: string }>();
  const router = useRouter();
  const pathname = usePathname();

  const filters: BlogFilter[] =
    data && "result" in data && Array.isArray(data.result) ? data.result : [];

  const handleClick = (value: string) => {
    const path = pathname.split("/").splice(0, 3).join("/");
    router.replace(`${path}/${value.toLowerCase()}`);
  };

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
                <ul aria-description="blogs filter list" className="w-full space-y-4">
                  {filters?.map(({ _id }) => (
                      <li
                      className="w-full border-b dark:border-midnight-800 pb-1"
                      aria-description="blog filter "
                      key={_id}
                      >
                      <Link
                       className="flex w-full rounded-full  hover:bg-gray-100 hover:dark:bg-neutral-700   p-2"
                        href={"/blogs/search/technology"}
                      >
                        {_id}
                      </Link>
                    </li>
                  ))}
                </ul>
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default HeaderDropDownOptions;

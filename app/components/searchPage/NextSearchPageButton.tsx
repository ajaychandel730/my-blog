"use client";
import React from "react";
import { Button } from "@heroui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
type Props = {
  paginationToken: string | undefined;
};

const NextSearchPage = ({ paginationToken }: Props) => {
  const [, a, b, query] = usePathname().split("/");

  return (
    <>
      <Button
        size="sm"
        isIconOnly
        radius="full"
        isDisabled={!paginationToken}
        as={Link}
        href={`/${a}/${b}/${query}/${paginationToken}`}
        color="primary"
      >
        <ChevronRightIcon className="w-5 h-5" />
      </Button>
    </>
  );
};

export default NextSearchPage;

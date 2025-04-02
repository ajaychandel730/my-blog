"use client";
import React from "react";
import { Button } from "@heroui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsChevronRight } from "react-icons/bs";
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
        color="default"
      >
        <BsChevronRight />
      </Button>
    </>
  );
};

export default NextSearchPage;

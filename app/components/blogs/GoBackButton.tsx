"use client";
import React from "react";
import { Button } from "@heroui/button";
import { ArrowLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const GoBackButton = () => {
  const router = useRouter();

  return (
    <Button
      className="text-gray-500 border-2 border-gray-500 hover:bg-black hover:text-white"
      aria-description="Go back button"
      type="button"
      radius="full"
      isIconOnly
      onPress={() => router.back()}
      size="md"
      variant="bordered"
    >
      <ArrowLeftIcon className="w-5 h-5" />
    </Button>
  );
};

export default GoBackButton;

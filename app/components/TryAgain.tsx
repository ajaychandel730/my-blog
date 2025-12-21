"use client";
import { Button } from "@heroui/button";
import { RefreshCcw } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const TryAgain = () => {
  const router = useRouter();
  return (
    <Button
      type="button"
      onPress={() => {
        router.refresh();
      }}
      className="bg-orange-600 text-gray-50"
      startContent={<RefreshCcw className="w-5 h-5" />}
    >
      Try again
    </Button>
  );
};

export default TryAgain;

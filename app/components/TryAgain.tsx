"use client";
import { Button } from "@heroui/button";
import { RefreshCcw } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { startTransition, useState } from "react";


const TryAgain = ({reset}:{reset:()=>void}) => {
  const router = useRouter();
  const [isloading, setIsloading] = useState(false);

  const handleReset = ()=>{
    setIsloading(true);
    startTransition(()=>{
       reset();
      setIsloading(false);
    })
   
  }
  
  return (
    <Button
      isLoading={isloading}
      type="button"
      onPress={handleReset}
      className="bg-orange-600 text-gray-50"
      startContent={ !isloading && <RefreshCcw className="w-5 h-5" />}
    >
      Try again
    </Button>
  );
};

export default TryAgain;

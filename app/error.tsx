"use client"; // Error boundaries must be Client Components
import { useRouter } from "next/navigation";
import { startTransition, useEffect } from "react";
import ConnectionErrorState from "./components/ConnectionErrorState";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string | undefined };
  reset: () => void;
}) {
  const router = useRouter();
 
  const refreshPage = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-dvh min-w-full  flex items-center justify-center ">
        <ConnectionErrorState reset={refreshPage}/>
    </div>
  );
}

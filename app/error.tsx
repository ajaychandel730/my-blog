"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import { Button } from "@heroui/button";
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string | undefined };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-dvh min-w-full  flex items-center justify-center ">
      <div>
        <h2>Something went wrong!</h2>
        <button
           className="cursor-pointer  bg-blue-400 text-gray-100 px-2 py-1 rounded-md"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
      </div>
    </div>
  );
}

"use client";

import React, { useState, useEffect, ReactNode } from "react";
import RenderError from "../error";

type ErrorBoundaryProps = {
  children: ReactNode;
};

export default function ErrorBoundary({ children }: ErrorBoundaryProps) {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      setHasError(true);
      setError(event.error || new Error("Unknown error occurred"));
      event.preventDefault();
    };

    window.addEventListener("error", handleError);
    return () => window.removeEventListener("error", handleError);
  }, []);

  const resetError = () => {
    setHasError(false);
    setError(null);
  };

  if (hasError && error) {
    return <RenderError error={error} reset={resetError} />;
  }

  return <>{children}</>;
}

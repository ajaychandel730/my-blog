import React from "react";

const BounceLoading = ({ text }: { text?: string }) => {
  return (
    <div className="flex text-gray-500 items-center space-x-1">
      {text && <p className=" text-base">{text}</p>}

      <div
        style={{ animationDelay: "0ms" }}
        className=" rounded-full animate-bounce"
      >
        .
      </div>
      <div
        style={{ animationDelay: "150ms" }}
        className=" rounded-full animate-bounce"
      >
        .
      </div>
      <div
        style={{ animationDelay: "300ms" }}
        className=" rounded-full animate-bounce"
      >
        .
      </div>
    </div>
  );
};

export default BounceLoading;

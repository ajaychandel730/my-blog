"use client";
import React from "react";
import Link from "next/link";


const LogoButton = () => {
  return (
    <Link aria-label="Go to BlogSpace home page" href="/" className="flex items-center">
      <div className="flex items-center gap-2">
        <div aria-hidden="true" className="w-8 h-8 bg-gradient-to-br from-blue-600  to-purple-600 rounded-lg flex items-center justify-center">
          <span className="text-white">B</span>
        </div>
        <span className="text-xl  hidden sm:inline-block tracking-tight font-medium">BlogSpace</span>
      </div>
    </Link>
  );
};

export default LogoButton;

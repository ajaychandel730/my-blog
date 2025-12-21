"use client";
import React from "react";
import Link from "next/link";


const LogoButton = () => {
  return (
    <Link  href="/" className="flex items-center">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
          <span className="text-white">B</span>
        </div>
        <span className="text-xl hidden sm:inline-block tracking-tight text-gray-900">BlogSpace</span>
      </div>
    </Link>
  );
};

export default LogoButton;

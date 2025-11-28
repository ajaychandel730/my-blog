import React from "react";
import { LogIn } from "lucide-react";
import Link from "next/link";
const SigninButton = () => {
  return (
    <Link
      href={"/signin"}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
      aria-label="Sign In"
    >
      <LogIn className="w-5 h-5" />
      <span>Sign In</span>
    </Link>
  );
};

export default SigninButton;

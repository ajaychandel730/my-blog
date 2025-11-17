import React from "react";

import Link from "next/link";
import Image from "next/image";
import VerifyOtpForm from "./VerifyOtpForm";
import ToastProvider from "@/app/ToastProvider";

const page = () => {
  return (
    <div className="min-h-dvh bg-gray-100 min-w-full flex p-4 lg:items-center justify-center">
      {/* // form */}
      <div className="flex p-6 w-full bg-gray-50 h-[400px] lg:w-[900px]  justify-center  rounded-lg lg:shadow-md">
        <div className="w-full space-y-1 mb-20 flex flex-col  lg:flex-row items-enter">
          <div className="flex flex-[0.7] flex-col">
            <Link
              href="/"
              className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <Image
                className="w-8 h-8 mr-2"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                alt="logo"
                width={300}
                height={200}
              />
              Quickwrite
            </Link>
            <h1 className="text-xl font-bold  text-gray-900 md:text-2xl dark:text-white">
              Confirm your OTP
            </h1>
            <span className="text-gray-500 text-base">
              Enter your 6 digit code
            </span>
          </div>
          <VerifyOtpForm/>
        </div>
      </div>
      {/* //form end/ */}
      <ToastProvider/>
    </div>
  );
};

export default page;

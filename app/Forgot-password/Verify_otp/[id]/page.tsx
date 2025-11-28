import React from "react";

import Link from "next/link";
import Image from "next/image";
import VerifyOtpForm from "./VerifyOtpForm";
import ToastProvider from "@/app/ToastProvider";
import LogoButton from "@/app/components/homePage/HeaderButtons/LogoButton";

const page = () => {
  return (
    <div className="min-h-dvh bg-gray-100 min-w-full flex p-4 lg:items-center justify-center">
      {/* // form */}
      <div className="flex p-6 w-full bg-gray-50 h-[400px] lg:w-[900px]  justify-center  rounded-lg lg:shadow-md">
        <div className="w-full space-y-1 mb-20 flex flex-col  lg:flex-row ">
          <div className="flex flex-[0.7] space-x-4 flex-col  space-y-4">
            <LogoButton/>
            <h1 className="text-xl font-bold  text-gray-900 md:text-2xl dark:text-white">
              Confirm your OTP
            </h1>
            <span className="text-gray-500 text-base w-[80%]">
             Enter the 6-digit verification code we’ve sent to your email.
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

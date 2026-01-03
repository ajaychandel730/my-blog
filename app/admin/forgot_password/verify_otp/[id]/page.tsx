import React from "react";
import VerifyOtpForm from "./VerifyOtpForm";
import FullLogoButton from "@/app/components/homePage/HeaderButtons/FullLogoButton";

const page = () => {
  return (
    <div className="min-h-dvh bg-background min-w-full flex p-4 lg:items-center justify-center">
      {/* // form */}
      <div className="flex p-6 w-full dark:bg-midnight-900 h-[400px] lg:w-[900px]  justify-center  rounded-lg lg:shadow-md">
        <div className="w-full space-y-1 mb-20 flex flex-col  lg:flex-row ">
          <div className="flex flex-[0.7] space-x-4 flex-col  space-y-4">
            <FullLogoButton/>
            <h1 className="text-xl font-bold  md:text-2xl text-foreground">
              Confirm your OTP
            </h1>
            <span className="text-gray-500 dark:text-midnight-400 text-base w-[80%]">
             Enter the 6-digit verification code we’ve sent to your email.
            </span>
          </div>
          <VerifyOtpForm/>
        </div>
      </div>
      {/* //form end/ */}
    </div>
  );
};

export default page;

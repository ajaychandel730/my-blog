import React from "react";

import ConfirmEmailForm from "./ConfirmEmailForm";
import LogoButton from "@/app/components/homePage/HeaderButtons/LogoButton";

const page = () => {
  return (
    <div className="min-h-dvh bg-gray-100 min-w-full flex p-4 lg:items-center justify-center">
      {/* // form */}
      <div className="flex p-6 w-full bg-gray-50 h-[400px] lg:w-[900px]  justify-center  rounded-lg lg:shadow-md">
        <div className="w-full space-y-1 mb-20 flex flex-col  lg:flex-row items-enter">
          <div className="flex flex-[0.7] flex-col space-y-4">
            <LogoButton/>
            <h1 className="text-xl font-bold  text-gray-900 md:text-2xl dark:text-white">
              Confirm your email
            </h1>
            <span className="text-gray-500 text-base">
              Enter your sign in email
            </span>
          </div>
          <ConfirmEmailForm/>
        </div>
      </div>
      {/* //form end/ */}
    </div>
  );
};

export default page;

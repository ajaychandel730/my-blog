import React from "react";
import ConfirmEmailForm from "./ConfirmEmailForm";
import FullLogoButton from "@/app/components/homePage/HeaderButtons/FullLogoButton";

const page = () => {
  return (
    <div className="min-h-dvh bg-background min-w-full flex p-4 lg:items-center justify-center">
      {/* // form */}
      <div className="flex p-6 w-full  dark:bg-midnight-900  h-[400px] lg:w-[900px]  justify-center  rounded-lg lg:shadow-md">
        <div className="w-full space-y-1 mb-20 flex flex-col  lg:flex-row items-enter">
          <div className="flex flex-[0.7] flex-col space-y-4">
            <FullLogoButton/>
            <h1 className="text-xl font-bold  text-gray-900 md:text-2xl dark:text-foreground">
              Confirm your email
            </h1>
            <span className="text-gray-500 dark:text-midnight-400  text-base">
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

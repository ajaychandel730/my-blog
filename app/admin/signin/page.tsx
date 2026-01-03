import React from "react";
import SiginForm from "./SiginForm";
import FullLogoButton from "../../components/homePage/HeaderButtons/FullLogoButton";

const SigninPage = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 px-6 py-8 mx-auto min-h-dvh lg:py-0">
      <FullLogoButton/>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h1>
          <SiginForm />
        </div>
      </div>
    </div>
  );
};

export default SigninPage;

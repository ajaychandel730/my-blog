import React from "react";
import SignupForm from "./SignupForm";
import FullLogoButton from "../components/homePage/HeaderButtons/FullLogoButton";

const SignUp = () => {
  return (
      <div className="flex flex-col space-y-2 items-center justify-center px-6 py-8 mx-auto min-h-dvh lg:py-0">
        <FullLogoButton/>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create a new account
            </h1>
               <SignupForm/>
          </div>
        </div>
      </div>
  );
};

export default SignUp;

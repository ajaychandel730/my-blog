import React from "react";
import SiginForm from "./SiginForm";
import ToastProvider from "../ToastProvider";
import LogoButton from "../components/homePage/HeaderButtons/LogoButton";

const Signin = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center space-y-2 px-6 py-8 mx-auto md:h-screen lg:py-0">
        <LogoButton/>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
           <SiginForm/>
          </div>
        </div>
      </div>
      <ToastProvider/>
    </section>
  );
};

export default Signin;

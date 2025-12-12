"use client";
import React, { useActionState, useState } from "react";
import Submitbutton from "../components/Submitbutton";
import { signup } from "@/actions/siginup";
import SignupSuccessModal from "./SignupSuccessModal";
import FormLink from "../components/FormLink";

const SignupForm = () => {
  const [state, action, isPending] = useActionState(signup, undefined);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <form action={action} className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="input"
            placeholder="name@gmail.com"
            required
          />
          {state?.errors?.email && (
            <p className="mt-2 text-sm text-red-500 font-medium">
              {state?.errors?.email}
            </p>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            className="input"
            required
          />
          <div className="flex items-start mt-2 mb-6">
            <div className="flex items-center h-5">
              <input
                onChange={(event) => {
                  setShowPassword(event.target.checked);
                }}
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              />
            </div>
            <label
              htmlFor="remember"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Show password
            </label>
          </div>
          {state?.errors?.password &&
            state.errors.password.map((message: string, idx) => (
              <p key={idx} className="mt-2 text-sm text-red-500 font-medium">{message}</p>
            ))}
        </div>
        <div className="mb-5">
          <label
            htmlFor="repeat-password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Repeat password
          </label>
          <input
            type="password"
            id="repeatPassword"
            name="repeatPassword"
            className="input"
            required
          />
          {state?.errors?.repeatPassword && (
            <p className="mt-2 text-sm text-red-500 font-medium">
              {state?.errors?.repeatPassword}
            </p>
          )}
        </div>
        <Submitbutton isPending={isPending} text="Register new account" />
        <FormLink
          text={"  Already have an account?"}
          href="/signin"
          linkText="Sign in"
        />
        <SignupSuccessModal state={state} />
      </form>
    </>
  );
};

export default SignupForm;

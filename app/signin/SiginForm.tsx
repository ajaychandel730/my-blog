"use client";
import React, { useState } from "react";
import Submitbutton from "../components/Submitbutton";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { getErrorMessage } from "@/utils/errors";
import { useRouter } from "next/navigation";
import FormLink from "../components/FormLink";

const SiginForm = () => {
  const router = useRouter();
  const [isPending, setIsPending] = useState<boolean>(false);
  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPending(true);
    try {
      const formData = new FormData(event.currentTarget);
      const userInputs = Object.fromEntries(formData.entries());
      const result = await signIn("credentials", {
        ...userInputs,
        redirect: false,
      });

      setIsPending(false);

      if (result?.ok) {
        router.push("/");
      } else if (result?.error) {
        toast.error(result.error);
      }
    } catch (err: unknown) {
      setIsPending(false);
      toast.error(getErrorMessage(err));
    }
  };

  return (
    <form onSubmit={submitHandler} className="space-y-4 md:space-y-6">
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className = "input"
          placeholder="name@company.com"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          className= "input"
        />
      </div>
      <div className="flex items-center justify-between">
        <Link
          href="/forgot_password/confirm_email"
          className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Forgot password?
        </Link>
      </div>
      <Submitbutton text={"Sign in"} isPending={isPending} />
      <FormLink
        text=" Don’t have an account yet?"
        href="/signup"
        linkText="Sign up"
      />
    </form>
  );
};

export default SiginForm;

"use client";
import React, { useRef, useState } from "react";
import Submitbutton from "../components/Submitbutton";
import { useFormState } from "react-dom";
import { signup } from "@/actions/siginup";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import Link from "next/link";

const SignupForm = () => {
  const [state, action] = useFormState(signup, undefined);
  const [showPassword, setShowPassword] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  
  console.log(state);
  
  if (
    state != undefined &&
    "message" in state &&
    state.message == "successfull"
  ) {
    onOpen();
    state.message = "";
  }

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
            placeholder="name@flowbite.com"
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
            state.errors.password.map((message) => (
              <p className="mt-2 text-sm text-red-500 font-medium">{message}</p>
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
        <Submitbutton text="Register new account" />
      </form>

      <Modal  hideCloseButton isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Welcome
              </ModalHeader>
              <ModalBody>
                <p>
                  Congratulations, your account hash been successfully created. Please continue for sign in.
                </p>
              </ModalBody>
              <ModalFooter>
                <Link href={"/signin"}>
                  <Button color="primary">
                    Continue
                  </Button>
                </Link>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default SignupForm;

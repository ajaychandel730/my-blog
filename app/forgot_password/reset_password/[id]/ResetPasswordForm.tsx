"use client";
import React, { useActionState, useEffect, useState } from "react";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Eye, EyeOff } from "lucide-react";
import resetForgotPassword from "@/actions/resetForgotPassword";
import { toast } from "react-toastify";
import FormLink from "@/app/components/FormLink";

const ResetPasswordForm = () => {
  const [state, resetPasswordAction, isPending] = useActionState(
    resetForgotPassword,
    undefined
  );
  const [isShowPassword, isShowPasswordSet] = useState<boolean>(false);

  useEffect(() => {
    if (typeof state?.status === "number" && state.status === 200) {
      toast.success(state.message);
    } else if (
      typeof state?.status === "number" &&
      state.status >= 400 &&
      state?.message
    ) {
      toast.error(state?.message);
    }
  }, [state]);

  return (
    <Form
      action={resetPasswordAction}
      validationBehavior="aria"
      className="flex flex-1 pt-10 lg:mt-0 flex-col items-end justify-evenly space-y-4"
    >
      <Input
        isRequired
        isInvalid={!!state?.errors?.password}
        errorMessage={() => (
          <ul>
            {state?.errors?.password?.map((message, index) => (
              <li key={index}>{message}</li>
            ))}
          </ul>
        )}
        size="lg"
        minLength={6}
        maxLength={10}
        endContent={
          isShowPassword ? (
            <Eye
              onClick={() => {
                isShowPasswordSet(!isShowPassword);
              }}
              className="stroke-gray-400  hover:cursor-pointer"
            />
          ) : (
            <EyeOff
              onClick={() => {
                isShowPasswordSet(!isShowPassword);
              }}
              className="stroke-gray-400 hover:cursor-pointer"
            />
          )
        }
        name="password"
        variant="bordered"
        type= {isShowPassword? "text" : "password"}
        placeholder="password"
      />
      <Input
        isRequired
        size="lg"
        isInvalid={!!state?.errors?.repeatPassword}
        errorMessage={() => (
          <ul>
            {state?.errors?.repeatPassword?.map((message, index) => (
              <li key={index}>{message}</li>
            ))}
          </ul>
        )}
        name="repeatPassword"
        variant="bordered"
        type="password"
        placeholder="Confirm password"
      />
      <Button type="submit" isLoading={isPending} color="primary" size="md">
        submit
      </Button>
      <FormLink
        text="Remember your password?"
        href="/signin"
        linkText="Sign in"
      />
    </Form>
  );
};

export default ResetPasswordForm;

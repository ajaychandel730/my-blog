"use client";
import React, { useActionState, useEffect, useMemo } from "react";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import confirmEmail from "../../../actions/confirmEmail";
import { toast } from "react-toastify";

const ConfirmEmailForm = () => {
  const [state, formAction, pending] = useActionState(confirmEmail, undefined);
  
  useEffect(() => {
    if (state && state.status >= 400 && typeof state?.error === "string") {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <Form
      action={formAction}
      className=" flex flex-1  pt-10 lg:mt-0 flex-col items-end justify-between space-y-4"
    >
      <div className="w-full">
        <Input
          isRequired
          size="lg"
          name="email"
          variant="bordered"
          type="email"
          placeholder="example@gmail.com"
        />
      </div>

      <Button
        isLoading={pending}
        disabled={pending}
        type="submit"
        color="primary"
        size="md"
      >
        Next
      </Button>
    </Form>
  );
};

export default ConfirmEmailForm;

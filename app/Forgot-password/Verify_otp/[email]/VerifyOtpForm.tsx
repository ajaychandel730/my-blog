"use client";
import React, { useActionState, useEffect, useMemo, useState } from "react";
import { Form } from "@heroui/form";
import { InputOtp } from "@heroui/input-otp";
import { Button } from "@heroui/button";
import { toast } from "react-toastify";
import ConfirmPasswordOtp from "@/actions/ConfirmPasswordOtp";
import { useSearchParams } from "next/navigation";
const VerifyOtpForm = () => {
  const [state, formAction, pending] = useActionState(
    ConfirmPasswordOtp,
    undefined
  );
  const [otp, setOtp] = useState<string>("");

  console.log("otp_state:", state);
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  useEffect(() => {
    if (state && state.status >= 400 && typeof state?.error === "string") {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <Form
      action={formAction}
      className=" flex w-fit   pt-10 lg:mt-0 flex-col  items-start  space-y-4"
    >
      {/* <div className="w-full"> */}
      <input type="email" defaultValue={email || ""} name="email" hidden />
      <InputOtp
        isRequired
        value={otp}
        onValueChange={setOtp}
        name="password_otp"
        length={6}
        size="md"
        variant="bordered"
      />
      {/* </div> */}
      <Button
        isLoading={pending}
        disabled={pending}
        type="submit"
        color="primary"
        size="md"
      >
        submit
      </Button>
    </Form>
  );
};

export default VerifyOtpForm;

"use client";
import React, { useActionState, useEffect, useState } from "react";
import { Form } from "@heroui/form";
import { InputOtp } from "@heroui/input-otp";
import { Button } from "@heroui/button";
import { toast } from "sonner";
import ConfirmPasswordOtp from "@/actions/ConfirmPasswordOtp";
import { useParams } from "next/navigation";
import FormLink from "@/app/components/FormLink";


const VerifyOtpForm = () => {
  const [state, formAction, pending] = useActionState(
    ConfirmPasswordOtp,
    undefined
  );

  const [otp, setOtp] = useState<string>("");

  const params = useParams();
  const userId = params.id;
  
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
      <input type="hidden" value={userId || ""} name="userId" hidden />
      <InputOtp
        classNames={{
          segment : "heroInput",
        }}
        isRequired
        value={otp}
        onValueChange={setOtp}
        name="otp"
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
       <FormLink text="Didn't receive the code?" href="/forgot_password/confirm_email" linkText="Resend"/>
    </Form>
  );
};

export default VerifyOtpForm;

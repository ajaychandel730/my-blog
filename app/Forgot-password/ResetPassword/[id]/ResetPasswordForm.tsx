"use client";
import React from "react";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";

const ResetPasswordForm = () => {

  return (
    <Form className=" flex flex-1  pt-10 lg:mt-0 flex-col items-end justify-evenly space-y-4">
      <Input
        isRequired
        size="lg"
        min={6}
        max={10}
        name="password"
        variant="bordered"
        type="password"
        placeholder="password"
      />
      <Input
        isRequired
        size="lg"
        name="confirmPassword"
        variant="bordered"
        type="password"
        placeholder="Confirm password"
      />
      <Button color="primary" size="md">
        submit
      </Button>
    </Form>
  );
};

export default ResetPasswordForm;

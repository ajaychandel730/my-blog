"use client";
import { Form } from "@heroui/form";
import React, { useActionState, useEffect } from "react";
import { Image } from "@heroui/image";
import UploadNewPhotoButton from "./UploadNewPhotoButton";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import EditUserInfo from "@/actions/EditUserInfo";
import Link from "next/link";
import { toast } from "sonner";

type Props = {
  user: {
    email: string;
    name: string;
    image: string;
  };
};

const UserEditForm = ({ user }: Props) => {
  const [state, formAction, isPending] = useActionState(EditUserInfo, user);
  console.log("state:", state);

  useEffect(() => {
    if("errors" in state && "image" in state.errors){
      toast.error(state.errors.image[0]);
      return;
    }

    if ("message" in state && typeof state.message === "string") {
      if ("status" in state && state.status == "ok") {
        toast.success(state?.message);
      } else {
        toast.error(state.message);
      }
    }
  }, [state]);

  return (
    <Form action={formAction} className="w-full my-20 flex space-y-10">
      <div className="w-full space-y-2 pb-10 border-b-1 border-gray-300">
        <h2>Profile picture</h2>
        <div className="flex space-x-4 items-center">
          <input type="text" value={user.image} readOnly name="image" hidden/> 
          <Image
            src={user.image}
            width={100}
            height={100}
            radius="full"
          ></Image>
          <UploadNewPhotoButton />
        </div>
      </div>
      <div className="min-w-[300px] flex flex-col space-y-14">
        <h2>Personal Information</h2>
        <div>
          <Input
            name="name"
            defaultValue={user.name}
            size="md"
            className="z-0"
            type="text"
            labelPlacement="outside"
            label="UserName"
            placeholder="Enter your username"
            isRequired
          />
          {state?.errors?.name &&
            state.errors.name?.map((message: string) => (
              <p className="mt-2 text-sm text-red-500 font-medium">{message}</p>
            ))}
        </div>
        <div>
          <Input
            name="email"
            defaultValue={user.email}
            className="z-0"
            type="email"
            placeholder="name@gmail.com"
            labelPlacement="outside"
            label="Email"
            isRequired
          />
          {state?.errors?.email &&
            state.errors.email?.map((message: string, idx: number) => (
              <p key={idx} className="mt-2 text-sm text-red-500 font-medium">
                {message}
              </p>
            ))}
        </div>
      </div>
      <div className="flex w-full gap-4">
        <Button as={Link} href="/user/profile" size="md" type="button">
          Cancel
        </Button>
        <Button isLoading={isPending} size="md" type="submit" color="primary">
          Save Changes
        </Button>
      </div>
    </Form>
  );
};

export default UserEditForm;

"use client";
import { Form } from "@heroui/form";
import React, { useActionState, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import UploadNewPhotoButton from "./UploadNewPhotoButton";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import EditUserInfo from "@/actions/EditUserInfo";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";
import FormErrors from "../FormErrors";

export type UserEditFormProps = {
  user: {
    email: string;
    name: string;
    image: string;
  };
};

const UserEditForm = ({ user }: UserEditFormProps) => {
  const { data: session, update } = useSession();
  const [state, formAction, isPending] = useActionState(EditUserInfo, user);
  const [userData, setUserData] = useState(user);

  const changeUserImage = (image:string):void=>{
   setUserData((data)=>{
    return {
     ...data,
     image
    }
   })
  }
   
  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    const { name, value } = event.target;
    setUserData((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    const updateSession = (): void => {
      if (state?.status == "ok" && "user" in state) {
        const { name, email, image } = { ...session, ...state.user };
        update({ name, email, image }).catch(() => {
          toast.error(
            "Unable to update session. Please login for updated profile."
          );
        });
      }
    };

    if ("errors" in state && "image" in state.errors) {
      toast.error(state.errors.image[0]);
      return;
    }

    if ("message" in state && typeof state.message === "string") {
      if ("status" in state && state.status == "ok") {
        toast.success(state?.message);
        updateSession();
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
          <input type="text" value={userData.image} readOnly name="image" hidden />
          <Image
            alt="profile image"
            className="rounded-full bg-gray-200 object-fill w-20 h-20"
            src={userData.image}
            width={100}
            height={100}
          />
          <UploadNewPhotoButton changeUserImage={changeUserImage} />
        </div>
      </div>
      <div className="min-w-[300px] flex flex-col space-y-14">
        <h2>Personal Information</h2>
        <div>
          <Input
            name="name"
            value={userData.name}
            onChange={inputChangeHandler}
            minLength={3}
            maxLength={32}
            size="md"
            className="z-0"
            type="text"
            labelPlacement="outside"
            label="UserName"
            placeholder="Enter your username"
            isRequired
          />
          <FormErrors errors={state?.errors?.name}/>
        </div>
        <div>
          <Input
            name="email"
            value={userData.email}
            onChange={inputChangeHandler}
            className="z-0"
            type="email"
            placeholder="name@gmail.com"
            labelPlacement="outside"
            label="Email"
            isRequired
          />
           <FormErrors errors={state?.errors?.email}/>
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

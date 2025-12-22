import React from "react";
import Header from "@/app/components/Header";
import BackToProfileLink from "@/app/components/profilePage/BackToProfileLink";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/options";
import { notFound } from "next/navigation";
import UserEditForm from "@/app/components/profilePage/UserEditForm";

const page = async () => {
  const session = await getServerSession(nextAuthOptions);

  if (!session?.user) {
    notFound();
  }

  const {email, image, name} = session.user;

  return (
    <div className="min-h-screen w-full flex flex-col items-center p-4  ">
      <Header />
      <div className="w-full lg:max-w-[900px] flex flex-col mt-20">
        <div className="w-full space-y-2">
          <BackToProfileLink />
          <div className="pl-2">
            <h1 className="text-base font-medium text-gray-900">
              Edit Profile
            </h1>
            <p className="text-medium text-gray-600">
              Update your profile information and settings
            </p>
          </div>
        </div>

        <UserEditForm user={{email, image, name}}/>
        
      </div>
    </div>
  );
};

export default page;

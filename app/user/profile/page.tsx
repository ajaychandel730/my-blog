import getUserTotalPostsCount from "@/actions/getUserTotalPostsCount";
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/options";
import UserInfoSection from "@/app/components/profilePage/UserInfoSection";
import UsersBlogsAndDrafts from "@/app/components/profilePage/UsersBlogsAndDrafts";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import PublishBlogItemSkeleton from "@/app/components/profilePage/PublishBlogItemSkeleton";

import React from "react";
import ToastProvider from "@/app/ToastProvider";

const UserProfilePage = async () => {
  const session = await getServerSession(nextAuthOptions);

  if (!session) {
    redirect("/signin");
  }
  const {
    user: { id, email, name, image },
  } = session;

  if (typeof id !== "string" || typeof email !== "string") {
    redirect("/signin");
  }

  const totalPosts: number | undefined = await getUserTotalPostsCount(id);

  return (
    <div className="min-h-screen w-full flex flex-col items-center p-4  ">
      <div className="w-full md:max-w-[900px] flex flex-col items-center">
        <UserInfoSection
          totalPosts={totalPosts}
          id={id}
          email={email}
          image={image}
          name={name}
        />
        <UsersBlogsAndDrafts PublishBlogItemSkeleton={<PublishBlogItemSkeleton/>} />
      </div>
      <ToastProvider/>
    </div>
  );
};

export default UserProfilePage;

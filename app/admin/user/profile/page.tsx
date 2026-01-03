import React from "react";
import getUserTotalPostsCount from "@/actions/getUserTotalPostsCount";
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/options";
import UserInfoSection from "@/app/components/profilePage/UserInfoSection";
import UsersBlogsAndDrafts from "@/app/components/profilePage/UsersBlogsAndDrafts";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import PublishBlogItemSkeleton from "@/app/components/profilePage/PublishBlogItemSkeleton";

import AdminHeader from "@/app/components/AdminHeader";

const UserProfilePage = async () => {
  const session = await getServerSession(nextAuthOptions);

  if (!session) {
    redirect("/admin/signin");
  }


   const {
    user: { id, name, image },
  } = session;

  const totalPosts: number | undefined = await getUserTotalPostsCount(id as string);

  return (
    <div className="min-h-screen w-full flex flex-col items-center p-4  ">
      <AdminHeader/>
      <div className="w-full md:max-w-[900px] flex flex-col items-center mt-20">
        <UserInfoSection
          totalPosts={totalPosts}
          image={image}
          name={name}
        />
          <UsersBlogsAndDrafts
            PublishBlogItemSkeleton={<PublishBlogItemSkeleton />}
          />
      </div>
    </div>
  );
};

export default UserProfilePage;

import React from "react";
import getUserTotalPostsCount from "@/actions/getUserTotalPostsCount";
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/options";
import UserInfoSection from "@/app/components/profilePage/UserInfoSection";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import PublishBlogItemSkeleton from "@/app/components/profilePage/PublishBlogItemSkeleton";
import AdminHeader from "@/app/components/AdminHeader";
import UsersTabs from "@/app/components/profilePage/UsersTabs";
import { UserRole } from "@/types/user";

const UserProfilePage = async () => {
  const session = await getServerSession(nextAuthOptions);

  if (!session) {
    redirect("/admin/signin");
  }

  const {
    user: { id, name, image },
  } = session;

  const totalPosts: number | undefined = await getUserTotalPostsCount(
    id as string,
  );

  return (
    <div className="min-h-screen w-full flex flex-col items-center p-4  ">
      <AdminHeader />
      <div className="w-full md:max-w-[900px] flex flex-col items-center mt-20">
        <UserInfoSection totalPosts={totalPosts} image={image} name={name} />
          <UsersTabs
            PublishBlogItemSkeleton={<PublishBlogItemSkeleton />}
            isAdmin={session.user.role === UserRole.ADMIN}
          />
      </div>
    </div>
  );
};

export default UserProfilePage;

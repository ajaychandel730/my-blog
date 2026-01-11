import { Avatar } from "@heroui/avatar";
import { Button } from "@heroui/button";
import React from "react";
import { UserRound } from "lucide-react";
import Link from "next/link";

type Props = {
  name: string;
  image: string;
  totalPosts: number | undefined;
};

const UserInfoSection = ({name, image, totalPosts }: Props) => {
 
  return (
    <div className="flex flex-col items-center w-full">
      <Avatar
        size="lg"
        className="w-24 h-24"
        showFallback
        fallback={<UserRound className="w-full h-full text-gray-700" />}
        src={image}
      />
      <p className="turncate line-clamp-1">{name}</p>

      {typeof totalPosts == "number" && (
        <p>
          <b>{totalPosts}</b> blogs
        </p>
      )}

      <Button type="button" aria-description="Edit profile page link" as={Link} href="/admin/user/edit" color="default" size="md" className="px-10  mt-10">
        Edit profile
      </Button>
    </div>
  );
};

export default UserInfoSection;

import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import React from "react";
import { FaUser } from "react-icons/fa";

type Props = {
  id: string;
  name: string;
  email: string;
  image: string;
  totalPosts: number | undefined;
};

const UserInfoSection = ({ id, name, email, image, totalPosts }: Props) => {
 
  return (
    <div className="flex flex-col items-center w-full">
      <Avatar
        size="lg"
        className="w-24 h-24"
        showFallback
        fallback={<FaUser className="w-full h-full text-gray-700" />}
        src={image}
      />
      <p>{name}</p>

      {typeof totalPosts == "number" && (
        <p>
          <b>{totalPosts}</b> blogs
        </p>
      )}

      <Button color="default" size="md" className="px-10 bg-gray-200 mt-10">
        Edit profile
      </Button>
    </div>
  );
};

export default UserInfoSection;

"use client";
import React from "react";
import { Card, CardBody, CardHeader } from "@heroui/card";
import toLocaleDateString from "@/utils/toLocaleDateString";
import { FeedbackMessage as FeedbackInterface } from "@/types/user";
import { MessageSquare, User2 } from "lucide-react";
import FeedbackMessageModal from "./FeedbackMessageModal";
import { useDisclosure } from "@heroui/modal";

type Props = FeedbackInterface;

const FeedbackMessage = ({
  name,
  email,
  subject,
  text,
  created_at,
  _id,
}: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const formattedDate = toLocaleDateString(created_at);
  
  return (
    <>
      <Card
        isPressable
        onPress={onOpen}
        as={"div"}
        fullWidth
        className={`flex items-center group  dark:bg-midnight-900`}
      >
        <CardHeader className="">
          <div className="flex items-center space-x-2">
            <div className="rounded-full flex items-center justify-center p-2 bg-blue-100">
              <User2 className="w-5 h-5 stroke-blue-500" />
            </div>
            <div>
              <p aria-description="user name">{name}</p>
              <p
                aria-description="user email address"
                className="text-neutral-400 text-tiny"
              >
                {email}
              </p>
            </div>
          </div>
        </CardHeader>
        <CardBody className="space-y-2">
          <span className="text-tiny text-neutral-500">{formattedDate}</span>
          <div className="flex items-center space-x-2">
            <MessageSquare className="w-5 h-5 stroke-neutral-500" />
            <h3 className="text-base">{subject}</h3>
          </div>
          <p className="leading-relaxed line-clamp-2 text-neutral-500">
            {text}
          </p>
          <FeedbackMessageModal
            name={name}
            email={email}
            subject={subject}
            text={text}
            created_at={formattedDate}
            _id={_id}
            onOpen={onOpen}
            onOpenChange={onOpenChange}
            isOpen={isOpen}
          />
        </CardBody>
      </Card>
    </>
  );
};

export default FeedbackMessage;

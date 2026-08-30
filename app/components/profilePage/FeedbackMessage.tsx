"use client";
import React, { useState } from "react";
import { Card, CardBody, CardHeader } from "@heroui/card";
import toLocaleDateString from "@/utils/toLocaleDateString";
import { FeedbackMessage as FeedbackInterface } from "@/types/user";
import { MessageSquare, User2 } from "lucide-react";
import FeedbackMessageModal from "./FeedbackMessageModal";
import { useDisclosure } from "@heroui/modal";
import FeedbackMessageDropdown from "./FeedbackMessageDropdown";

type Props = FeedbackInterface & {
  isDeleted: boolean;
  handleFeedbackDelete: (id: string, setIsLoading: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>;
};

const FeedbackMessage = ({
  handleFeedbackDelete,
  name,
  email,
  isDeleted,
  subject,
  text,
  created_at,
  _id,
}: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const formattedDate = toLocaleDateString(created_at);
  const [isLoading, setIsLoading] = useState(false);

  const deleteFeedback = () => {
    handleFeedbackDelete(_id, setIsLoading);
  };

  return (
    <>
      <Card
        isPressable={!isDeleted}
        onPress={onOpen}
        as={"div"}
        fullWidth
        className={`flex items-center group  dark:bg-midnight-900 ${
          isDeleted && "bg-danger-100"
        }`}
      >
        <CardHeader className="w-full flex justify-between">
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
          {isDeleted ? (
            <span className="text-tiny text-danger">Deleted</span>
          ) : (
            <FeedbackMessageDropdown
              handleFeedbackDelete={deleteFeedback}
              isLoading={isLoading}
            />
          )}
        </CardHeader>
        <CardBody className="space-y-2">
          <span className="text-tiny text-neutral-500 dark:text-midnight-400">{formattedDate}</span>
          <div className="flex items-center space-x-2">
            <MessageSquare className="w-5 h-5 stroke-neutral-500 dark:text-midnight-400" />
            <h3 className="text-base">{subject}</h3>
          </div>
          <p className="leading-relaxed line-clamp-2 text-neutral-500 dark:text-midnight-400">
            {text}
          </p>
          {!isDeleted && (
            <FeedbackMessageModal
              name={name}
              email={email}
              subject={subject}
              onDeleteFeedback={deleteFeedback}
              text={text}
              created_at={formattedDate}
              _id={_id}
              onOpenChange={onOpenChange}
              isOpen={isOpen}
            />
          )}
        </CardBody>
      </Card>
    </>
  );
};

export default FeedbackMessage;

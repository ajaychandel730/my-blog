"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import { Button } from "@heroui/button";
import { Calendar, CalendarDays, MessageSquare, User2 } from "lucide-react";
import { FeedbackMessage } from "@/types/user";

type Props = FeedbackMessage & {
  isOpen: boolean;
  onDeleteFeedback: ()=>void;
  onOpenChange: () => void;
};

const FeedbackMessageModal = ({
  isOpen,
  onOpenChange,
  name,
  email,
  subject,
  text,
  created_at,
  onDeleteFeedback,
}: Props) => {
  return (
    <>
      <Modal
        size="xl"
        scrollBehavior="inside"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Feedback details
              </ModalHeader>
              <ModalBody className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="rounded-full flex items-center justify-center p-2 bg-blue-100">
                    <User2 className="w-5 h-5 stroke-blue-500" />
                  </div>
                  <div className="w-full">
                    <p aria-description="user name">{name}</p>
                    <p
                      aria-description="user email address"
                      className="text-neutral-500 dark:text-midnight-400 text-tiny"
                    >
                      {email}
                    </p>
                  </div>
                </div>
                <hr/>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 stroke-neutral-500 dark:stroke-midnight-400" />
                  <span className="text-tiny text-neutral-600 dark:text-midnight-300">
                    {created_at}
                  </span>
                </div>

                <div>
                  <div className="flex items-center space-x-2 text-neutral-500 dark:text-midnight-400 ">
                    <MessageSquare className="w-5 h-5" />
                    <span className="text-sm">Subject</span>
                  </div>
                  <h3 className="pl-7 text-base">{subject}</h3>
                </div>
                <hr/>
                <div className="space-y-2">
                   <span className="text-sm text-neutral-800 dark:!text-midnight-300">Message</span>  
                  <p className="leading-relaxed  text-neutral-600 dark:text-midnight-400">
                    {text} 
                  </p>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button  color="primary" onPress={()=>{onDeleteFeedback(); onClose();}}>
                  Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default FeedbackMessageModal;

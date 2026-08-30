"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/modal";
import { Button } from "@heroui/button";
import Link from "next/link";
import { toast } from "sonner";

interface Props {
  state: unknown;
}

const SignupSuccessModal = ({ state }: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
    try {
      if (
        !state ||
        typeof state !== "object" ||
        !("message" in state) ||
        !state.message
      ) {
        return;
      }

      if (state.message === "successfull") {
        onOpen();
        state.message = "";
      } else if (
        "error" in state &&
        state.error !== null &&
        typeof state.error == "object"
      ) {
        if ("server" in state.error && state.error.server == true) {
           toast.error(
              String(state?.message) ||
              "Something went wrong. Please try later.");
          state.error.server = false;
          state.message = "";
        }
      }
    } catch (err) {
      toast.error("Something went wrong. Please refresh page.");
    }

  return (
    <Modal hideCloseButton isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1">Welcome</ModalHeader>
            <ModalBody>
              <p>
                Congratulations, your account hash been successfully created.
                Please continue for sign in.
              </p>
            </ModalBody>
            <ModalFooter>
              <Link href={"/admin/signin"}>
                <Button color="primary">Continue</Button>
              </Link>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default SignupSuccessModal;

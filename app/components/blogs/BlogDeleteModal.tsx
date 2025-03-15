"use client";
import React, { useState } from "react";
import { Button } from "@heroui/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import { useParams } from "next/navigation";
import deletePostById from "@/actions/deletePostById";
import { toast } from "react-toastify";

type Props = {
  isOpen: boolean;
  onOpenChange: () => void;
};

const BlogDeleteModal = ({ isOpen, onOpenChange }: Props) => {
  const { slug } = useParams();
  const [loading, setloading ] = useState<boolean>(false);
  console.log("blogId:", slug);

  const deleteHandler = async (onClose: () => void) => {
    setloading(true);
    if (!slug || Array.isArray(slug)) {
      setloading(false);
      onClose();
      return;
    }

    const res = await deletePostById(slug);
   
    if (res.status == "ok") {
      toast.success(res.message || "Your post has been removed.");
    } else {
      toast.error(res.message || "Something went wrong. Please try later.");
    }
    
    setloading(false);
    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Delete blog?
              </ModalHeader>
              <ModalBody>
                <p>Are you sure you want to delete this blog?</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button isLoading={loading} color="primary" onPress={() => deleteHandler(onClose)}>
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

export default BlogDeleteModal;

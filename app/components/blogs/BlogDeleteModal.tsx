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
import deletePostById from "@/actions/deletePostById";
import { toast } from "sonner";
import deleteDraftById from "@/actions/deleteDrraftById";
import { BlogType } from "@/types/blog";

type Props = {
  tab: string;
  isOpen: boolean;
  onOpenChange: () => void;
  slug: string;
  onDeleteBlog?: (blogId: string) => void;
};

const isBlogOrDraft = (tab:string)=>{
  if(tab === BlogType.draft){
    return "draft";
  }else{
    return "blog";
  }
}

const BlogDeleteModal = ({
  isOpen,
  onOpenChange,
  slug,
  onDeleteBlog,
  tab,
}: Props) => {
  const [loading, setloading] = useState<boolean>(false);
  const itemName = isBlogOrDraft(tab);    
  
  const deleteHandler = async (onClose: () => void) => {
    setloading(true);
    if (!slug || Array.isArray(slug)) {
      setloading(false);
      onClose();
      return;
    }
     
    let res;
    if(itemName == "blog"){
      res = await deletePostById(slug);
    }else{
      res = await deleteDraftById(slug);
    }
   
    if (res.status == "ok") {
      if (typeof onDeleteBlog == "function") {
        onDeleteBlog(slug);
      }

      toast.success(res.message || `Your ${itemName} has been removed.`);
    } else {
      toast.error("Something went wrong. Please try later.");
    }

    setloading(false);
    onClose();
  };

  return (
    <>
      <Modal className="dark:bg-midnight-800" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Delete {itemName}?
              </ModalHeader>
              <ModalBody>
                <p>Are you sure you want to delete this {itemName}.</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button
                  isLoading={loading}
                  color="primary"
                  onPress={() => deleteHandler(onClose)}
                >
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

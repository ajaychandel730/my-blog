"use client";
import React, { useState } from "react";
import { Button } from "@heroui/button";
import { getErrorMessage } from "@/utils/errors";
import saveDraftBlog from "@/actions/saveDraftBlog";
import { useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import updateDraftById from "@/actions/updateDraftById";
import { Files } from "lucide-react";
import { toast } from "sonner";
import getBlogUserId from "@/actions/getBlogUserId";

const SaveDraftButton = () => {
  const { blog } = useAppSelector((state: RootState) => state.editorReducer);
  const {editDraftId, editBlogId} = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const session = useSession();

  const handleSaveDraft = async () => {
    try {
      setLoading(true);
      if (session.status !== "authenticated") {
        toast.warning("Please login your account.");
        return;
      }

      let res;
      const draftData = {
        title: blog.title || "",
        banner: blog.image || "",
        description: blog.description || "",
        topics: blog.topics || [],
        content: blog.content
          ? Array.isArray(blog.content.content)
            ? blog.content.content
            : []
          : [],
      };

      if (editDraftId && typeof editDraftId == "string") {
        res = await updateDraftById(
          JSON.parse(JSON.stringify({ _id: editDraftId, ...draftData }))
        );
      } else {
        if(editBlogId && typeof editBlogId === "string"){
           const blogOwnerId:string | null = await getBlogUserId(editBlogId);
            if(!blogOwnerId || blogOwnerId !== session.data.user.id){
              toast.error("Only owner can save draft of publish blog.");    
              return;      
            }
       }
        res = await saveDraftBlog(JSON.parse(JSON.stringify(draftData)));
      }

      if (res.status == "ok") {
        if (editDraftId && typeof editDraftId == "string") {
          toast.success(res.message ?? "Draft is upadted successfully.");
        } else {
           toast.success(res.message || "Draft Saved.");
        }
      } else {
        if ("error" in res && typeof res.error == "object") {
          Object.entries(res.error).forEach((entry) => {
            const value = entry[1];
            toast.error(value.toString());
          });
        }else{
          toast.error(res.message || "Somthing went wrong. Please try later.");
        }        
      }
    } catch (err) {
       toast.error(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button
        
        aria-describedby="save draft button"
        role="button"
        variant="light"
        className="hidden lg:inline-flex darkButton"
        startContent={!loading && <Files className="w-5 h-5" />}
        isLoading={loading}
        size="md"
        onPress={handleSaveDraft}
      >
        Save draft
      </Button>
      <Button
        aria-label="save draft button"
        role="button"
        className="lg:hidden darkButton"
        isIconOnly
        variant="bordered"
        radius="full"
        startContent={!loading && <Files className="w-5 h-5" />}
        isLoading={loading}
        size="md"
        onPress={handleSaveDraft}
      ></Button>
    </>
  );
};

export default SaveDraftButton;

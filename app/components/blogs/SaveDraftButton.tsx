"use client";
import React, { useState } from "react";
import { Button } from "@heroui/button";
import { toast } from "react-toastify";
import { getErrorMessage } from "@/utils/errors";
import saveDraftBlog from "@/actions/saveDraftBlog";
import { useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import updateDraftById from "@/actions/updateDraftById";
import { RiDraftLine } from "react-icons/ri";

const SaveDraftButton = () => {
  const { blog } = useAppSelector((state: RootState) => state.editorReducer);
  const { type, editBlogId } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const session = useSession();

  const handleSaveDraft = async () => {
    try {
      setLoading(true);
      if (session.status !== "authenticated") {
        toast.warn("Please login your account.");
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

      if (type == "draft" && typeof editBlogId == "string") {
        res = await updateDraftById(
          JSON.parse(JSON.stringify({ _id: editBlogId, ...draftData }))
        );
      } else {
        res = await saveDraftBlog(JSON.parse(JSON.stringify(draftData)));
      }

      if (res.status == "ok") {
        if (type == "draft" && typeof editBlogId == "string") {
          toast.success(res.message ?? "Draft is upadted successfully.");
        } else {
          toast.success(res.message || "Draft Saved.");
        }
      } else {
        if ("error" in res && typeof res.error == "object") {
          Object.entries(res.error).forEach(([key, value]) => {
            toast.error(value.toString());
          });
        }
      }
    } catch (err) {
      toast.error(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      startContent={!loading && <RiDraftLine className="w-5 h-5" />}
      isLoading={loading}
      size="md"
      onPress={handleSaveDraft}
    >
      Save draft
    </Button>
  );
};

export default SaveDraftButton;

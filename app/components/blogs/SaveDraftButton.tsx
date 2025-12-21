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

const SaveDraftButton = () => {
  const { blog } = useAppSelector((state: RootState) => state.editorReducer);
  const {editDraftId } = useParams();
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
    <>
      <Button
        variant="light"
        className="hidden lg:inline-flex"
        startContent={!loading && <Files className="w-5 h-5" />}
        isLoading={loading}
        size="md"
        onPress={handleSaveDraft}
      >
        Save draft
      </Button>
      <Button
        className="lg:hidden"
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

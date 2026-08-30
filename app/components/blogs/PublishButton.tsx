"use client";
import React, { useState } from "react";
import publishBlog from "@/actions/publishBlog";
import { Plane } from "lucide-react";
import { Button } from "@heroui/button";
import { useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { getErrorMessage } from "@/utils/errors";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import updateBlogById, { BlogUpdatePayload } from "@/actions/updateBlogById";
import { toast } from "sonner";
import { UserRole } from "@/types/user";

const PublishButton = () => {
  const session = useSession();
  const {editBlogId } = useParams();
  const {
    blog: { title, topics, image: banner, description, content },
  } = useAppSelector((state: RootState) => state.editorReducer);

  const [publishLoading, setPublishLoading] = useState<boolean>(false);

  const handlePublish = async () => {
    try {
      setPublishLoading(true);

      if (!session ||  session.status !== "authenticated") {
         toast.warning("Please login your account.");
        return;
      }
      
      const userRole = session.data.user.role;

      if(userRole !== UserRole.ADMIN){
        toast.warning("You don’t have permission to access this feature.");
        return;
      }

      const blogData = {
        title: title || "",
        topics: topics || [],
        banner: banner || "",
        description: description || "",
        content:
          content == undefined
            ? []
            : Array.isArray(content?.content)
            ? content.content
            : [],
      };

      let res;

      if (editBlogId && typeof editBlogId == "string") {
        const blog: BlogUpdatePayload = {
          _id: editBlogId,
          ...blogData,
        };
        res = await updateBlogById(JSON.parse(JSON.stringify(blog)));
      } else {
        res = await publishBlog(JSON.parse(JSON.stringify(blogData)));
      }

      if (res.status == "ok") {
        toast.success(
          res.message ??
            (editBlogId ? "Blog updated successfully." : "New blog added.")
      
        
        );
      } else if (res.status == "error") {
        toast.error(res.message);
      } else {
        if ("error" in res && typeof res.error == "object") {
          Object.entries(res.error).forEach((entry) => {
             const value = entry[1];
            toast.error(value.toString());
          });
        }else{
          toast.error("Something went wrong. Please try later.");
        }
      }
    } catch (err) {
      console.log("publish error: ", err);
      toast.error(getErrorMessage(err));
    } finally {
      setPublishLoading(false);
    }
  };
  return (
    <>
      <Button
        aria-describedby="publish button"
        role="button"
        size="md"
        className="hidden lg:inline-flex"
        isLoading={publishLoading}
        onPress={handlePublish}
        startContent={
          !publishLoading && <Plane className="w-5 h-5" />
        }
        color="primary"
      >
        Publish
      </Button>
      <Button
        aria-label="publish button"
        role="button"
        size="md"
        isIconOnly
        className="lg:hidden"
        radius="full"
        isLoading={publishLoading}
        onPress={handlePublish}
        startContent={
          !publishLoading && <Plane className="w-5 h-5" />
        }
        color="primary"
      />
    </>
  );
};

export default PublishButton;

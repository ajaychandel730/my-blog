"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import publishBlog from "@/actions/publishBlog";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { Button } from "@nextui-org/button";
import { useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { getErrorMessage } from "@/utils/errors";
import { useSession } from "next-auth/react";

const PublishButton = () => {
  const session = useSession();
  
  const {
    blog: { title, topics, image: banner, description, content },
  } = useAppSelector((state: RootState) => state.editorReducer);

  const [publishLoading, setPublishLoading] = useState<boolean>(false);
 
  const handlePublish = async () => {
    try {
      setPublishLoading(true);

      if(session.status !== "authenticated"){
         toast.warn("Please login your account.");
         return;
      }
      
      const {data:{user : {name, id, image }}} = session;

      const blogData = {
        title: title || "",
        topics: topics || [],
        banner: banner || "",
        description: description || "",
        content: content == undefined? [] : Array.isArray(content?.content)? content.content : [],
      }
      const res = await publishBlog(JSON.parse(JSON.stringify(blogData)));
      console.log("res:", res);
      if (res.status == "ok") {
        toast.success(res.message || "New blog added.");
      }else if(res.status == "error"){
       toast.error(res.message);
      } else {
        if ("error" in res && typeof res.error == "object") {
          Object.entries(res.error).forEach(([key, value]) => {
            toast.error(value.toString());
          });
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
    <Button
      size="md"
      isLoading={publishLoading}
      onPress={handlePublish}
      startContent={
        !publishLoading && <IoPaperPlaneOutline className="w-5 h-5" />
      }
      color="primary"
    >
      Publish
    </Button>
  );
};

export default PublishButton;

"use client";
import React, {useState} from 'react'
import { toast } from 'react-toastify';
import publishBlog from "@/actions/publishBlog";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { Button } from "@nextui-org/button";

const PublishButton = () => {
  const [publishLoading, setPublishLoading] = useState<boolean>(false);
  const handlePublish = async () => {
    try {
      setPublishLoading(true);
      const res = await publishBlog({
        title: "",
        topics: [],
        banner: "dksjds",
        description: "ksdjskjd ksjd ksjk",
        content: [{}, {}],
      });
    
      if(res.status ==  "ok"){
          toast.success(res.message || "New blog added.");
      }else{
        if("error" in  res && typeof res.error == "object"){
          Object.entries(res.error).forEach(([key, value])=>{
            toast.error(value.toString());
          })            
        }
      }
    } catch (err) {
      console.log("publish error: ", err);
    }finally{
      setPublishLoading(false);
    }
  };
  return (
    <Button
          isLoading = {publishLoading}
          onPress={handlePublish}
          startContent={!publishLoading && <IoPaperPlaneOutline className="w-5 h-5" />}
          color="primary"
        >
          Publish
        </Button>
  )
}

export default PublishButton
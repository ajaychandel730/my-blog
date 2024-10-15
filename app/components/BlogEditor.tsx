"use client";
import React, { useCallback, useEffect, useState } from "react";
import BlogImage from "./BlogImage";
import { Textarea } from "@nextui-org/input";
import EditorJS from "@editorjs/editorjs";
import { toast } from "react-toastify";
import tools from "@/lib/editorTools";

const BlogEditor = () => {
  const [editor, setEditor] = useState<EditorJS | null>(null);

  const configEditor = useCallback( async () => {
    const newEditor = new EditorJS({
      holder: "editor",
      placeholder: "Type here",
      tools,
    });
    
    setEditor(newEditor);
  }, [editor]);
    
  useEffect(() => {
    try{
      configEditor();
    }catch(err){
      toast.error("Something went wrong. Please refresh page again.");
    }
  }, []);

  return (
    <div className="max-w-[700px] space-y-4 w-full ">
      <BlogImage />
      <Textarea
        label="Description"
        placeholder="Enter your description"
        className="w-full "
      />
      <div
        id="editor"
        className="w-full h-max bg-gray-100 rounded-md px-1"
      ></div>
    </div>
  );
};

export default BlogEditor;

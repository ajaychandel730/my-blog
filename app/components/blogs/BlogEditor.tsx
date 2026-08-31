"use client";
import React, { useCallback, useEffect, useState } from "react";
import BlogImage from "./BlogImage";
import { Input, Textarea } from "@heroui/input";
import { toast } from "sonner";
import TailwindEditor from "./TailwindEditor";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState, setBlog } from "@/lib/store";
import BlogTopicTags from "./BlogTopicTags";
import { useParams } from "next/navigation";
import { Blog } from "@/lib/features/editor/editorSlice";
import getEditBlogById from "@/actions/getEditBlogById";
import getEditDraftById from "@/actions/getEditDraftById";
import BlogEditorLoading from "./BlogEditorLoading";
import { getErrorMessage } from "@/utils/errors";


const BlogEditor = () => {
  const dispatch = useAppDispatch();
  const { editBlogId, editDraftId } = useParams();
  const [loading, setLoading] = useState(editBlogId ? true : false);
   

  const { blog, isReseting } = useAppSelector(
    (state: RootState) => state.editorReducer
  );

  const fetchBlog = useCallback(async (id: string) => {
    setLoading(true);
    const blog: Blog | null = await getEditBlogById(id);
    if (!blog) {
      toast.info("Blog not found.");
    } else {
      dispatch(setBlog(blog));
    }
    setTimeout(setLoading, 0, false);
  }, []);

  const fetchDraft = useCallback( async (id: string) => {
    setLoading(true);
    const blog: Blog | null = await getEditDraftById(id);

    if (!blog) {
      toast.info("Draft not found.");
    } else {
      dispatch(setBlog(blog));
    }
    setTimeout(setLoading, 0, false);
  }, []);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value, name } = e.target;
    dispatch(setBlog({ [name]: value }));
  };

  useEffect(() => {
    try {
      if (editBlogId && typeof editBlogId === "string") {
        fetchBlog(editBlogId);
      } else if (editDraftId && typeof editDraftId === "string") {
        fetchDraft(editDraftId);
      } else {
        const blog = window.localStorage.getItem("blog")
          ? JSON.parse(localStorage.getItem("blog") as string)
          : {};
        dispatch(setBlog(blog));
      }
    } catch (err) {
      console.log("error:", getErrorMessage(err));
      toast.error("Something went wrong. Please refresh page again.");
    }
  }, [editBlogId, editDraftId]);

  if (loading) {
    return <BlogEditorLoading />;
  }

  return (
    <div className="w-full max-w-[700px] space-y-4">
      <Input
        name="title"
        value={blog.title}
        onChange={onChangeHandler}
        placeholder="Blog title"
        label="Title"
        type="text"
        isRequired
      />
      <BlogTopicTags />
      <BlogImage />
      <Textarea
        isRequired
        value={blog.description}
        onChange={onChangeHandler}
        label="Description"
        name="description"
        placeholder="Enter your description"
        className="w-full "
      />
      {!isReseting && <TailwindEditor />}
    </div>
  );
};

export default BlogEditor;

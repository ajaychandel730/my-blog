"use client";
import React, { useEffect, useState } from "react";
import BlogImage from "./BlogImage";
import { Input, Textarea } from "@heroui/input";
import { toast } from "react-toastify";
import TailwindEditor from "./TailwindEditor";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState, setBlog } from "@/lib/store";
import BlogTopicTags from "./BlogTopicTags";
import { useParams } from "next/navigation";
import { Blog, editBlog } from "@/lib/features/editor/editorSlice";
import getEditBlogById from "@/actions/getEditBlogById";

const BlogEditor = () => {
  const dispatch = useAppDispatch();
  const { editBlogId } = useParams();
  const [loading, setLoading] = useState(editBlogId ? true : false);

  const { blog, isReseting } = useAppSelector(
    (state: RootState) => state.editorReducer
  );

  const fetchBlog = async(id: string) => {
    setLoading(true);
    const blog:(Blog | null) = await getEditBlogById(id);
    if (!blog) {
        toast.error("Blog not found.");
    }else{
      dispatch(setBlog(blog));
    }
    setTimeout(setLoading, 0, false);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value, name } = e.target;
    dispatch(setBlog({ [name]: value }));
  };

  useEffect(() => {
    try {
      if (editBlogId && typeof editBlogId == "string") {
         fetchBlog(editBlogId);
      } else {
        const blog = window.localStorage.getItem("blog")
          ? JSON.parse(localStorage.getItem("blog") as string)
          : {};
        dispatch(setBlog(blog));
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong. Please refresh page again.");
    }
  }, [editBlogId]);
  
  if (loading) {
    return <>...loading</>;
  }
  
  return (
    <div className="max-w-[700px] space-y-4 w-full ">
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

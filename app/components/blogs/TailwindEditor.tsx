"use client";
import React, { useEffect, useState } from "react";
import { EditorContent, EditorRoot, JSONContent } from "novel";
import { novelExtensions } from "../../extension";
import { handleCommandNavigation, ImageResizer } from "novel/extensions";
import { handleImageDrop, handleImagePaste } from "novel/plugins";
import { uploadFn } from "../../novel/imageUpload";
import NovelEditorCommand from "./NovelEditorCommand";
import NovelEditorBubble from "./NovelEditorBubble";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState, setBlog } from "@/lib/store";

const TailwindEditor = () => {
  const { blog } = useAppSelector((state: RootState) => state.editorReducer);
  const dispatch = useAppDispatch();
  const [mounted, setMounted] = useState(false);

  const intialContent: JSONContent | undefined = !Array.isArray(blog.content)
    ? blog.content
    : { type: "doc", content: blog.content };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <>
      <div className="border border-gray-400 dark:border-blue-400 rounded-md">
        <span className="p-2 text-sm text-gray-600">Content</span>
        <EditorRoot>
          <EditorContent
            editorProps={{
              handleDOMEvents: {
                keydown: (_view, event) => handleCommandNavigation(event),
              },
              attributes: {
                class: `prose min-h-[600px] prose-lg dark:prose-invert prose-headings:font-title font-default focus:outline-none max-w-full`,
              },

              handlePaste: (view, event) =>
                handleImagePaste(view, event, uploadFn),
              handleDrop: (view, event, _slice, moved) =>
                handleImageDrop(view, event, moved, uploadFn),
            }}
            extensions={novelExtensions}
            initialContent={intialContent}
            onUpdate={({ editor }) => {
              const json = editor.getJSON();
              dispatch(setBlog({ content: json }));
            }}
          >
            <ImageResizer />
            <NovelEditorCommand />
            <NovelEditorBubble />
          </EditorContent>
        </EditorRoot>
      </div>
    </>
  );
};
export default TailwindEditor;

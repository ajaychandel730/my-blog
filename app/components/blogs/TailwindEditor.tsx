"use client";
import {
  EditorContent,
  EditorRoot,
  JSONContent,
  useEditor,
} from "novel";
import { novelExtensions } from "../../extension";
import {
  handleCommandNavigation,
  ImageResizer,
  SuggestionItem,
} from "novel/extensions";
import { handleImageDrop, handleImagePaste } from "novel/plugins";
import { uploadFn } from "../../novel/imageUpload";
import NovelEditorCommand from "./NovelEditorCommand";
import NovelEditorBubble from "./NovelEditorBubble";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState, setBlog } from "@/lib/store";

const TailwindEditor = () => {
  const {blog:{content}} = useAppSelector((state:RootState)=> state.editorReducer);
  const dispatch = useAppDispatch();
   
  console.log("content:", content);
  return (
    <>
     <div className="flex items-center">
          <span className="text-lg font-medium tracking-wider"></span>
     </div>
      <EditorRoot>
      <EditorContent 
        // immediatelyRender={false}
        editorProps={{
          handleDOMEvents: {
            keydown: (_view, event) => handleCommandNavigation(event),
          },
          attributes: {
            class: `prose min-h-[600px] prose-lg dark:prose-invert prose-headings:font-title font-default focus:outline-none max-w-full`,
          },
          
          handlePaste: (view, event) => handleImagePaste(view, event, uploadFn),
          handleDrop: (view, event, _slice, moved) =>
          handleImageDrop(view, event, moved, uploadFn),
        }}
        extensions={novelExtensions}
        initialContent={JSON.parse(localStorage.getItem("blog") as string)?.content}
        onUpdate={({ editor }) => {
          const json = editor.getJSON();
           dispatch(setBlog({content : json}));
        }}
      >
        <ImageResizer />
        <NovelEditorCommand />
        <NovelEditorBubble />
      </EditorContent>
    </EditorRoot>
    </>
  
  );
};
export default TailwindEditor;

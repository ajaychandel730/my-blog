// import { cn } from "@/lib/utils";
"use client";
import { EditorBubbleItem, useEditor } from "novel";
import { BoldIcon, ItalicIcon, UnderlineIcon, StrikethroughIcon, CodeIcon } from "lucide-react";
import type { SelectorItem } from "./NodeSelector";
import { Button } from "@nextui-org/button";
import { toast } from "react-toastify";

export const TextButtons = () => {
  const { editor } = useEditor();
  if (!editor) return null;
  const items: SelectorItem[] = [
    {
      name: "bold",
      isActive: (editor) => editor !== null && editor.isActive("bold"),
      command: (editor) =>  editor !== null && editor.chain().focus().toggleBold().run(),
      icon: BoldIcon,
    },
    {
      name: "italic",
      isActive: (editor) => editor !== null && editor.isActive("italic"),
      command: (editor) => editor !== null? editor.chain().focus().toggleItalic().run() : undefined,
      icon: ItalicIcon,
    },
    {
      name: "underline",
      isActive: (editor) => editor !== null && editor.isActive("underline"),
      command: (editor) => editor !== null ?  editor.chain().focus().toggleUnderline().run() : null,
      icon: UnderlineIcon,
    },
    {
      name: "strike",
      isActive: (editor) => editor !== null && editor.isActive("strike"),
      command: (editor) => editor !== null? editor.chain().focus().toggleStrike().run() : undefined,
      icon: StrikethroughIcon,
    },
    {
      name: "code",
      isActive: (editor) => editor !== null && editor.isActive("code"),
      command: (editor) => editor !== null? editor.chain().focus().toggleCode().run(): undefined,
      icon: CodeIcon,
    },
  ];

  return (
    <div className='flex'>
      {items.map((item, index) => (
        <EditorBubbleItem
          key={index}
          onSelect={(editor) => {
            item.command(editor);
          }}>
          <Button  onPress={()=>{item.command(editor)}} isIconOnly className='rounded-none' variant=  'ghost'>
            <item.icon
              className={`h-4 w-4 ${item.isActive(editor)? "text-blue-400" : ""}`}
            />
          </Button>
        </EditorBubbleItem>
      ))}
    </div>
  );
};

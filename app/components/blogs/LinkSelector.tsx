// import { cn } from "@/lib/utils";
import { useEditor } from "novel";
import { Check, Trash } from "lucide-react";
import { type Dispatch, type FC, type SetStateAction, useEffect, useRef } from "react";
import { Button } from "@nextui-org/button";
import {Popover, PopoverContent, PopoverTrigger} from "@nextui-org/popover"

export function isValidUrl(url: string) {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
}
export function getUrlFromString(str: string) {
  if (isValidUrl(str)) return str;
  try {
    if (str.includes(".") && !str.includes(" ")) {
      return new URL(`https://${str}`).toString();
    }
  } catch (e) {
    return null;
  }
}
interface LinkSelectorProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const LinkSelector = ({ open, onOpenChange }: LinkSelectorProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { editor } = useEditor();

  // Autofocus on input by default
  useEffect(() => {
    inputRef.current && inputRef.current?.focus();
  });
  if (!editor) return null;

  return (
    <Popover triggerType= "dialog" isOpen={open} offset={10} onOpenChange={onOpenChange}>
      <PopoverTrigger>
        <Button variant='ghost' className='gap-2 rounded-none border-none'>
          <p className='text-base'>↗</p>
          <p
            className={""}>
            Link
          </p>
        </Button>
      </PopoverTrigger>
      <PopoverContent  className='w-60 p-0 flex flex-col items-start'>
        <form
          onSubmit={(e) => {
            const target = e.currentTarget as HTMLFormElement;
            e.preventDefault();
            const input = target[0] as HTMLInputElement;
            const url = getUrlFromString(input.value);
            url && editor.chain().focus().setLink({ href: url }).run();
          }}
          className='flex  p-1 '>
          <input
            ref={inputRef}
            type='text'
            placeholder='Paste a link'
            className='flex-1 bg-background p-1 text-sm outline-none'
            defaultValue={editor.getAttributes("link").href || ""}
          />
          {editor.getAttributes("link").href ? (
            <Button
              isIconOnly
              variant="light"
              type='button'
              className='flex h-8 items-center rounded-sm p-1 text-red-600 transition-all hover:bg-red-100 dark:hover:bg-red-800'
              onClick={() => {
                editor.chain().focus().unsetLink().run();
              }}>
              <Trash className='h-4 w-4' />
            </Button>
          ) : (
            <Button isIconOnly className='h-8 '>
              <Check className='h-4 w-4' />
            </Button>
          )}
        </form>
      </PopoverContent>
    </Popover>
  );
};

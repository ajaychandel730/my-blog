"use client";
import { EditorBubble } from 'novel'
import React, { useState } from 'react'
import { NodeSelector } from './NodeSelector'
import { LinkSelector } from './LinkSelector';
import { TextButtons } from './TextButtons';
import { ColorSelector } from './ColorSelector';

const NovelEditorBubble = () => {
  const [openNode, setOpenNode] = useState<boolean>(false);
  const [openLink, setOpenLink] = useState<boolean>(false);
  const [openColor, setOpenColor] = useState<boolean>(false);
  
  return (
    <EditorBubble
    tippyOptions={{
      placement: "top",
    }}
    className='flex w-fit max-w-[90vw] overflow-hidden rounded border border-muted bg-background shadow-xl'>
       <NodeSelector open={openNode} onOpenChange={()=> {setOpenNode((val)=> !val)}} />
      <LinkSelector open={openLink} onOpenChange={()=> {setOpenLink((val)=> !val)}} />
       <TextButtons />
      <ColorSelector isOpen={openColor} setIsOpen={()=>{setOpenColor((val)=> !val)}} open={openColor} onOpenChange={() => { setOpenColor((val) => !val); }} /> 
  </EditorBubble>
  )
}

export default NovelEditorBubble
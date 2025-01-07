'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import ListItem from '@tiptap/extension-list-item'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit, ListItem],
    // content: '<p>Hello World! 🌎️</p>',
  })

  return <EditorContent editor={editor} />
}

export default Tiptap


export interface TextNode {
    type: string;
    marks?: [
      {
        type: string;
        attrs: {
          color?: string;
          class?: string;
          href?: string;
          rel?: string;
          target?: string;
        };
      }
    ];
    text: string;
  }
  
  export interface TaskItemNode {
    type: string;
    attrs: {
      checked: boolean;
    };
    content: ParagraphNode[];
  }
  
 export interface ParagraphNode {
    type: string;
    content: TextNode[];
  }
  
  export interface TaskListNode {
    type: string;
    content: TaskItemNode[];
  }
  
  export interface HeadingNode {
    type: string;
    attrs: {
      level: number;
    };
    content: TextNode[];
  }
  
  export interface ListItemNode {
    type: string;
    content: ParagraphNode[];
  }
  
  export interface OrderedListNode {
    type: string;
    attrs: {
      start: number;
    };
    content: ListItemNode[];
  }
  
  export interface ImageNode {
    type: string;
    attrs: {
      src: string;
      alt: string | null;
      title: string | null;
      width: number;
      height: number;
    };
  }
  
 export  interface BulletListNode {
    type: string;
    content: ListItemNode[];
  }
  
  export interface Blockquote {
    type: string;
    content: ParagraphNode | BulletListNode | OrderedListNode | TaskListNode[];
  }
  
  export interface CodeBlock {
    type: string;
    attrs: {
      language: null | string;
    };
    content: TextNode[];
  }


  
   export type NovelNode =
    | ParagraphNode
    | HeadingNode
    | ImageNode
    | OrderedListNode
    | BulletListNode
    | TaskListNode
    | Blockquote
    | CodeBlock;

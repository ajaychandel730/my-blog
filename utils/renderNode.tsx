"use server";
import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import Link from "next/link";

interface TextNode {
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

interface TaskItemNode {
  type: string;
  attrs: {
    checked: boolean;
  };
  content: ParagraphNode[];
}

interface ParagraphNode {
  type: string;
  content: TextNode[];
}

interface TaskListNode {
  type: string;
  content: TaskItemNode[];
}

interface HeadingNode {
  type: string;
  attrs: {
    level: number;
  };
  content: TextNode[];
}

interface ListItemNode {
  type: string;
  content: ParagraphNode[];
}

interface OrderedListNode {
  type: string;
  attrs: {
    start: number;
  };
  content: ListItemNode[];
}

interface ImageNode {
  type: string;
  attrs: {
    src: string;
    alt: string | null;
    title: string | null;
    width: number;
    height: number;
  };
}

interface BulletListNode {
  type: string;
  content: ListItemNode[];
}

interface Blockquote {
  type: string;
  content: ParagraphNode[];
}

interface CodeBlock {
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

/// main function
export default async function (node: NovelNode) {
  if (node.type == "paragraph") {
    return paragraphNode(node as ParagraphNode);
  }
}

type TextNodeProps = {
  className? : string;
  key : string | number;
  href? : string;
  rel? : string;
  target? : string;
}

const textNode = (node: TextNode) => {
  try {
    const text: string = node.text;
    const props: TextNodeProps = {
      key: nanoid(6),
    };

    if (node.marks) {
      let className = "";
      let tag:(string | typeof Link) = "span";

      node.marks.map(({ type, attrs }) => {
        switch (type) {
          case "textStyle":
            className =  className.concat(`text-[${attrs.color}] `);
            break;

          case "highlight":
            className = className.concat(`bg-[${attrs.color}] `);
            break;

          case "bold" :
            className = className.concat(`font-bold `);

          case "italic" :
            className = className.concat("italic "); 
          break;

          case "underline" : 
          className = className.concat("underline ");

          case "strike" :
            className = className.concat("line-through ");
          break;

          case "code" : 
              tag = "code";
              className = className.concat("font-mono px-1 rounded text-sm");
          break;

          case "link" : 
          tag = Link;
          props.href = attrs.href;
          props.rel = attrs.rel;
          props.target = attrs.target;
          className = className.concat("text-blue-500 hover:text-blue-800 cursor-pointer underline");
          break;

          default : ;
        }
      });

      props.className = className.trim();
      return React.createElement(tag, props, text);
    } else {
      return <> {text} </>;
    }
  } catch (err) {
    console.log(err);
    return <></>;
  }
};

const paragraphNode = (node: ParagraphNode): React.JSX.Element => {
  return (
    <p>
      {node.content.map((text) => {
        return textNode(text);
      })}
    </p>
  );
};

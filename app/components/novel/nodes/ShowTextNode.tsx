import React from "react";
import { TextNode } from "@/types/novel";
import Link from "next/link";

type TextNodeProps = {
  className?: string;
  href?: string;
  style?: React.CSSProperties;
  rel?: string;
  target?: string;
};

const ShowTextNode = ({ node }: { node: TextNode }) => {
  const text = node.text;
  const props: TextNodeProps = {};
  const style: React.CSSProperties = {};

  let tag: string | typeof Link = "span";
  let className = "";

  if (node.marks) {
    node.marks.forEach(({ type, attrs }) => {
      switch (type) {
        case "textStyle":
          if (attrs?.color) style.color = attrs.color;
          break;

        case "highlight":
          if (attrs?.color) {
            style.backgroundColor = attrs.color;
            className += "px-1 rounded ";
          }
          break;

        case "bold":
          className += "font-semibold ";
          break;

        case "italic":
          className += "italic ";
          break;

        case "underline":
          className += "underline underline-offset-2 ";
          break;

        case "strike":
          className += "line-through ";
          break;

        case "code":
          tag = "code";
          className +=
            "font-mono text-sm bg-neutral-100 px-1.5 py-0.5 rounded ";
          break;

        case "link":
          tag = Link;
          props.href = attrs.href;
          props.rel = attrs.rel ?? "noopener noreferrer";
          props.target = attrs.target ?? "_blank";
          className +=
            "text-blue-600 underline underline-offset-4 hover:text-blue-800 ";
          break;
      }
    });
  }

  if (className) props.className = className.trim();
  if (Object.keys(style).length) props.style = style;

  return React.createElement(tag, props, text);
};


export default ShowTextNode;

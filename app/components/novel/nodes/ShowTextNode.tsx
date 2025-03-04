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
  const text: string = node.text;
  const props: TextNodeProps = {};
  const style: React.CSSProperties = {};

  if (node.marks) {
    let className = "";
    let tag: string | typeof Link = "span";

    node.marks.forEach(({ type, attrs }) => {
      switch (type) {
        case "textStyle":
          style.color = attrs.color;
          break;

        case "highlight":
          style.backgroundColor = attrs.color;
          break;

        case "bold":
          className = className.concat(`font-bold `);
          break;

        case "italic":
          className = className.concat("italic ");
          break;

        case "underline":
          className = className.concat("underline ");
          break;

        case "strike":
          className = className.concat("line-through ");
          break;

        case "code":
          tag = "code";
          className = className.concat("font-mono px-1 rounded text-sm");
          break;

        case "link":
          tag = Link;
          props.href = attrs.href;
          props.rel = attrs.rel;
          props.target = attrs.target;
          className = className.concat(
            "text-blue-500 hover:text-blue-800 cursor-pointer underline"
          );
          break;

        default:
      }
    });

    props.className = className.trim();

    if (Object.values(style).length > 0) {
      props.style = style;
    }

    return React.createElement(tag, props, text);
  } else {
    return <> {text} </>;
  }
};

export default ShowTextNode;

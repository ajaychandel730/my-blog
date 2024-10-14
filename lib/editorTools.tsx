import Header from '@editorjs/header';
import ImageTool from '@editorjs/image';
import List from '@editorjs/list';
import Checklist from "@editorjs/checklist";
import Quote from "@editorjs/quote";
import Warning from "@editorjs/warning";
import Marker from "@editorjs/marker";
import CodeTool from "@editorjs/code";
import Delimiter from "@editorjs/delimiter";
import InlineCode from "@editorjs/inline-code";
import LinkTool from "@editorjs/link";
import Embed from "@editorjs/embed";
import Table from "@editorjs/table";

const tools = {
    header: Header,
    image: ImageTool,
    list: List,
    checklist: Checklist,
    quote: Quote,
    warning: Warning,
    marker: Marker,
    code: CodeTool,
    delimiter: Delimiter,
    inlineCode: InlineCode,
    linkTool: LinkTool,
    embed: Embed,
    table: Table
}

export default tools;
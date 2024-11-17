import Header from '@editorjs/header';
import Image from '@editorjs/image';
import List from '@editorjs/list';
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import InlineCode from "@editorjs/inline-code";
import LinkTool from "@editorjs/link";
import Embed from "@editorjs/embed";
import Table from "@editorjs/table";


export const tools = {
    image: {
        class: Image,
        config: {
            uploader: {
                uploadByFile: (file:File) => {
                    return {
                        success: 1,
                        file: {
                            url: URL.createObjectURL(file),
                            raw: file
                        }
                    }
                }
            }
        }

    },
    list: {
        class : List,
        inlineToolbar : true,
    },
    header: {
        class : Header,
        config : {
            placeholder : "Type heading...",
            levels : [1,2,3,4,5,6],
            defaultLevel : 1
        }
    },
    quote: {
        class : Quote,
        inlineToolBar : true,
    },
    marker: Marker,
    inlineCode: InlineCode,
    linkTool: LinkTool,
    embed: Embed,
    table: Table
}
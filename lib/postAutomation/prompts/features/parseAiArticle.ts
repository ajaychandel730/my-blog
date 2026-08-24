import { marked } from "marked";
import { generateJSON } from "@tiptap/html";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import { nanoBanana } from "../../googleNanoBanana";
import { sharpImageCompress } from "@/lib/imageCompress/sharpImageCompress";
import { uploadImageOnCloudinary } from "@/lib/cloudinary";



export async function parseAiBlogContent(article_markdown: string) {
  const images = [...article_markdown.matchAll(/!\[IMAGE:\s*(.*?)\]/g)].map(
    (image) => ({
      placeholder: image[0],
      description: image[1],
    }),
  );

  // genrate with ai and upload images on cloudinary
//   const imagePromises = images.map(async (image) => {
//     const interaction = await nanoBanana(image.description);
//     const generatedImage = interaction.output_image;

//     if (!generatedImage || !generatedImage.data) {
//       throw new Error(
//         "Failed to generate image Gemini returned no image data.",
//       );
//     }

//     const imageCompress = await sharpImageCompress(generatedImage.data);
//     const cloudurl = await uploadImageOnCloudinary(imageCompress.toBase64());

//     if (!cloudurl) {
//       throw new Error("Failed to upload on cloudinary");
//     }

//     return {
//       ...image,
//       cloudinaryUrl: cloudurl,
//     };
//   });

//   const imagesResolvedData = await Promise.all(imagePromises);
  //

//   for (let imageItem of imagesResolvedData) {
//     article_markdown = article_markdown.replace(
//       imageItem.placeholder,
//       `![${imageItem.description}](${imageItem.cloudinaryUrl})`,
//     );
//   }

  const markedHtml = await marked.parse(  `# Test

This is a paragraph.

![Test image](https://example.com/test.jpg)`);

  console.log(markedHtml);
  const content = generateJSON(markedHtml, [StarterKit, Image]);
  return content;
}

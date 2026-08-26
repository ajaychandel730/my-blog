import { sharpImageCompress } from "@/lib/imageCompress/sharpImageCompress";
import { nanoBanana } from "../../googleNanoBanana";
import { uploadImageOnCloudinary } from "@/lib/cloudinary";


export async function promptToImageUrl(prompt:string){
  const interaction = await nanoBanana(prompt);
  const generatedImage = interaction.output_image;
  if(!generatedImage || !generatedImage.data){
     throw new Error("Nano banana not able to generate image data.");
  }

  const imageBuffer = await sharpImageCompress(generatedImage.data);
  const cloudUrl = await uploadImageOnCloudinary(imageBuffer.toBase64());
  if(!cloudUrl){
    throw new Error("Unable to upload image on cloudinary.");
  }
  return cloudUrl;
}
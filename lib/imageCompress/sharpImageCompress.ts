import sharp from "sharp";

export async function sharpImageCompress(inputBuffer:string){
  const imageBuffer =  await sharp(inputBuffer).resize({ width: 900, withoutEnlargement:true}).webp({quality:40}).toBuffer();
  return imageBuffer;
}

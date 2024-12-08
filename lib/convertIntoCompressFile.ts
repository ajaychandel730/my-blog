import {Options} from "browser-image-compression";
import imageCompression from 'browser-image-compression';

const options:Options = {
    maxSizeMB: 0.7,
    // maxWidthOrHeight: 900,
    useWebWorker: true,
    initialQuality : 0.6
};

export default async(fileImage:File):Promise<File | null>=>{
 try{
  const compressFile = await imageCompression(fileImage, options);
  return compressFile;
  
 }catch(err){
   return null;
 }
};
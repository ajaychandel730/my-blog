import {Options} from "browser-image-compression";
import imageCompression from 'browser-image-compression';

const defaultOptions:Options = {
    maxSizeMB: 0.4,
    // maxWidthOrHeight: 900,
    useWebWorker: true,
    initialQuality : 0.5
};

export default async(fileImage:File, options:Options):Promise<File | null>=>{
 try{
  const compressFile = await imageCompression(fileImage, {...defaultOptions, ...options });
  return compressFile;
  
 }catch(err){
   return null;
 }
};
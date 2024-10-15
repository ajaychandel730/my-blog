"use server";
import { getErrorMessage } from '@/utils/errors';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUD_API_KEY, 
    api_secret: process.env.CLOUD_API_SECRET // Click 'View API Keys' above to copy your API secret
});


const uploadImageOnCloudinary = async(image:string):Promise<string | null>=>{
 try{
  const uploadResult = await cloudinary.uploader.upload(image, {
    upload_preset : "myblog"
  });
   return uploadResult.secure_url;
   
 }catch(err){
  console.log(getErrorMessage(err));
  return null;
 }
};


export {uploadImageOnCloudinary};
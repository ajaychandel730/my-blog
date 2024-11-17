import { createImageUpload } from "novel/plugins";
import { toast } from "react-toastify";
import { uploadImageOnCloudinary } from "@/lib/cloudinary";
import convertIntoCompressFile from "@/lib/convertIntoCompressFile";
import { resolve } from "path";

const onUpload = async (file: File) => {
     const compressFile:File | null = await convertIntoCompressFile(file);

     if(!compressFile){
        toast.error("onUpload error. Please try again.");
        return;
     }

     const reader = new FileReader();
     reader.readAsDataURL(compressFile);
     
     const promise = new Promise((resolve, reject)=>{
        reader.onload = async()=>{
            const imageUrl = await uploadImageOnCloudinary(reader.result as string);
            if(!imageUrl){
                toast.error("Image not uploaded on server. Please try again.");
                reject(new Error("On upload error."));
            }
            resolve(imageUrl);
        }
     })
      
    return promise;
};

export const uploadFn = createImageUpload({
    onUpload,
    validateFn: (file) => {
        if (!file.type.includes("image/")) {
            toast.error("File type not supported.");
            return false;
        } else if (file.size / 1024 / 1024 > 20) {
            toast.error("File size too big (max 20MB).");
            return false;
        }
        return true;
    },
});


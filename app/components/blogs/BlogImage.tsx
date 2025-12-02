"use client";
import { Button, ButtonGroup } from "@heroui/button";
import { ArrowUpTrayIcon, TrashIcon, PhotoIcon } from "@heroicons/react/24/outline";
import React, { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState, setBlog } from "@/lib/store";
import Image from "next/image";
import convertIntoCompressFile from "@/lib/convertIntoCompressFile";
import { toast } from "react-toastify";
import { uploadImageOnCloudinary } from "@/lib/cloudinary";
import { getErrorMessage } from "@/utils/errors";
import { Tooltip } from "@heroui/tooltip";

const BlogImage = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [imageloading, setImageLoading] = useState<boolean>(false);
  const { blog } = useAppSelector((state: RootState) => state.editorReducer);
  const dispatch = useAppDispatch();

  const handleOnChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files == null) return;
    try {
      setImageLoading(true);
      const file: File | null = await convertIntoCompressFile(files[0]);
      if (!file) {
        toast.error("Unable to load image. Try again.");
        return;
      }

      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = async () => {
        const imageBase64Url: string = reader.result as string;
        const imageUrl = await uploadImageOnCloudinary(imageBase64Url);

        if (imageUrl) {
          dispatch(setBlog({ image: imageUrl }));
        } else {
          toast.error("Unable to load image. Try again.");
        }
        setImageLoading(false);
      };
    } catch (err) {
      toast.error(getErrorMessage(err));
      setImageLoading(false);
    }
  };

  return (
    <div className=" relative aspect-video flex items-center justify-center bg-gray-100  rounded-lg overflow-hidden">
      <input
        onChange={handleOnChange}
        accept=".png, .jpg, .jpeg, .webp"
        ref={fileRef}
        type="file"
        className="hidden"
      />
      {blog.image && !imageloading? (
        <ButtonGroup size="lg" variant="faded" className="absolute z-20 ">
          <Tooltip content="Change image.">
            <Button
              onPress={() => {
                fileRef?.current?.click();
              }}
              color="primary"
              isIconOnly
            >
              <PhotoIcon />
            </Button>
          </Tooltip>
          <Tooltip content="Delete image.">
            <Button onPress={()=>{dispatch(setBlog({image : ''}));}} color="danger" isIconOnly>
              <TrashIcon />
            </Button>
          </Tooltip>
        </ButtonGroup>
      ) : (
        <Button
          
          variant="shadow"
          isLoading={imageloading}
          startContent={imageloading ? "" : <ArrowUpTrayIcon className="w-5 h-5" />}
          onPress={() => {
            fileRef?.current?.click();
          }}
          color="default"
          className="bg-gray-50 absolute z-30"
        >
          Upload image
        </Button>
      )}

      {blog.image && (
        <Image
          fill
          className="absolute z-10 object-cover inset-0"
          alt="blog img"
          src={blog.image}
        />
      )}
    </div>
  );
};

export default BlogImage;

import React from "react";
import {Chip } from "@heroui/chip";
import {Button} from "@heroui/button"
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState, setBlog } from "@/lib/store";

const ListOfTags = () => {
  const {blog:{topics:tags}} = useAppSelector((state:RootState)=> state.editorReducer);
  const dispatch = useAppDispatch();

  if(!tags || tags.length == 0) return <></>;

  const handleClose = (tagsToRemove: string) => {
    const filterTags:string[] = tags.filter((tags) => tags !== tagsToRemove);
    dispatch(setBlog({topics : filterTags}));
  };

  return (
    <div className="space-x-2 space-y-2 w-full">
        <div className="w-full ">
        <Button type="button" className="darkGrayButton" aria-describedby="clear all tags button" onPress={()=>{dispatch(setBlog({topics : []}))}} size="sm"  variant="ghost">
            Clear all
        </Button>
        </div>
        {tags.map((tag, index) => (
        <Chip color="primary" className="text-sm dark:bg-gray-800 dark:text-gray-100" key={tag + index} onClose={() => handleClose(tag)} variant="flat">
          {tag}
        </Chip>
      ))}
    </div>
  );
};

export default ListOfTags;

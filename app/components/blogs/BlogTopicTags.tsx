import React, { useState } from "react";
import { Input } from "@heroui/input";
import ListOfTags from "./ListOfTags";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState, setBlog } from "@/lib/store";
import cleanTag from "@/lib/cleanTag";

const BlogTopicTags = () => {
  const {blog:{topics}} = useAppSelector((state:RootState)=> state.editorReducer); 
  const dispatch = useAppDispatch();
  const [topicValue, setTopicValue] = useState<string>("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    if (key !== "Enter") return;
    if(topicValue.length == 0) return;
    const newTopics =  Array.isArray(topics)? [...topics, cleanTag(topicValue)] : [cleanTag(topicValue)];
    dispatch(setBlog({topics : newTopics}));
    setTopicValue("");
  };

  return (
    <div className="flex  w-full flex-col space-y-2 ">
      <Input
        placeholder="Write topic and hit enter."
        maxLength={30}
        value={topicValue}
        onValueChange={setTopicValue}
        onKeyDown={handleKeyDown}
        type="text"
        label="Tags"
        isRequired
      />
      <ListOfTags/>
    </div>
  );
};

export default BlogTopicTags;

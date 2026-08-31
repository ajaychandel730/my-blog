"use client";
import React, {
  Key,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Tabs, Tab } from "@heroui/tabs";
import UserPublishBlogs from "./UserPublishBlogs";
import UserDrafts from "./UserDrafts";
import UserMessages from "./UserMessages";
import { usePathname } from "next/navigation";

type Props = {
  PublishBlogItemSkeleton: React.JSX.Element;
  isAdmin: boolean;
};

const UsersTabs = ({ PublishBlogItemSkeleton, isAdmin }: Props) => {
  const pathname = usePathname();
  const scrollKey = "scrollTo:" + pathname;
  const selectTabKey = "selectTab:" + pathname;
  const [selectTab, setSelectTab] = useState("blogs");
  const refSelectedTab = useRef(selectTab);

  const selectionChangeHandler = (key: Key | null) => {
    if (key) {
      refSelectedTab.current = key.toString();
      setSelectTab(key.toString());
    }
  };

  useLayoutEffect(() => {
    if (sessionStorage.getItem(selectTabKey)) {
      const userSelectTab = sessionStorage.getItem(selectTabKey) as string;
      setSelectTab(userSelectTab);
      refSelectedTab.current = userSelectTab;
    }
    return () => {
      sessionStorage.setItem(selectTabKey, refSelectedTab.current);
    }
  }, []);


  return (
    <div className="flex w-full min-h-[600px] flex-col items-center mt-10 p-2  rounded-md ">
      <Tabs
        selectedKey={selectTab}
        onSelectionChange={selectionChangeHandler}
        variant="underlined"
        color="primary"
        size="lg"
        aria-label="Blogs and drafts tabs"
        className="w-full flex"
      >
        <Tab key="blogs" title={"Published"} className="w-full">
          <UserPublishBlogs PublishBlogItemSkeleton={PublishBlogItemSkeleton} />
        </Tab>
        <Tab key="drafts" title={"Draft"} className="w-full">
          <UserDrafts PublishBlogItemSkeleton={PublishBlogItemSkeleton} />
        </Tab>
        {isAdmin && (
          <Tab key="feedback" title={"Feedback"} className="w-full">
            <UserMessages />
          </Tab>
        )}
      </Tabs>
    </div>
  );
};

export default UsersTabs;

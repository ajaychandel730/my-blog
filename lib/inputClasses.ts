import { InputProps } from "@heroui/input";

export const baseInputClasses: InputProps["classNames"] = {
  label: "!text-foreground",
  inputWrapper:
    "dark:!bg-gray-800  dark:hover:!bg-gray-700 dark:group-data-[focus=true]:!bg-gray-700/50",
  innerWrapper: "dark:!bg-transparent",
  input: ["dark:placeholder:!text-white/60 !text-foreground"],
};

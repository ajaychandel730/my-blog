"use client";
import { Filter } from "@/actions/getBlogsFilterList";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import React from "react";

interface Props {
  filters: Filter[];
}

const CategoriesFilters = ({ filters }: Props) => {
  const params = useParams<{ type: string }>();
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (value:string) => {
    const path = pathname.split("/").splice(0, 3).join("/");
    router.replace(`${path}/${value.toLowerCase()}`);
  };

  return (
    <div className="w-full   p-2 space-x-4">
      {filters.map(({_id, count}) => (
        <button
          key={_id}
          type="button"
          onClick={ ()=> handleClick(_id)}
          className={`py-2 px-4 rounded-full  text-base ${
            params.type.toLowerCase() === _id.toLowerCase()
              ? "bg-blue-600 text-gray-50"
              : "bg-white text-black"
          } `}
        >
          {_id} {count == -1 ? `` : `(${count})`}
        </button>
      ))}
    </div>
  );
};

export default CategoriesFilters;

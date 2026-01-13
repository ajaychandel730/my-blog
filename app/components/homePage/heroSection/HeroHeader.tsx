import { ChevronRight } from "lucide-react";
import React from "react";

const HeroHeader = ({
  heading,
  isIcon = true,
  id
}: {
  heading: string;
  id : string;
  isIcon?: boolean;
}) => {
  return (
    <div className="text-blue-500  flex items-center">
      <h2 id={id} className="text-xl capitalize">{heading}</h2>
      {isIcon && <ChevronRight aria-hidden="true" className="w-7 h-7" />}
    </div>
  );
};

export default HeroHeader;

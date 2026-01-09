import { ChevronRight } from "lucide-react";
import React from "react";

const HeroHeader = ({
  heading,
  isIcon = true,
}: {
  heading: string;
  isIcon?: boolean;
}) => {
  return (
    <div className="text-blue-500  flex items-center">
      <h3 className="text-xl capitalize">{heading}</h3>
      {isIcon && <ChevronRight className="w-7 h-7" />}
    </div>
  );
};

export default HeroHeader;

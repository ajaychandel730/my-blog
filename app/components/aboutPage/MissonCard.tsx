import React from "react";

type Props = {
 heading : string;
 description : string;
 icon : React.ReactNode;
}

const MissonCard = ({heading, description, icon}:Props) => {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl mb-2">{heading}</h3>
      <p className="text-neutral-600 dark:text-midnight-200">
        {description}
      </p>
    </div>
  );
};

export default MissonCard;

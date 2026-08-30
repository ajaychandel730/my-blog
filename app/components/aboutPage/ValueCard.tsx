import React from "react";

type Props ={
    heading : string;
    description : string;
    icon : React.ReactNode;
}

const ValueCard = ({heading, description, icon}:Props) => {
  return (
    <div className="p-8 text-center border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
        {icon}
      </div>
      <h3 className="text-2xl mb-4 dark:text-midnight-200">{heading}</h3>
      <p className="text-slate-600 dark:text-midnight-400">
        {description}
      </p>
    </div>
  );
};

export default ValueCard;

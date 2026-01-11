import React from "react";
import { Sparkles, WifiOff } from "lucide-react";
import TryAgain from "./TryAgain";

type Props = {
  reset : ()=>void;
}

const ConnectionErrorState = ({reset}:Props) => {
  return (
    <div className="min-w-[300px] max-w-md min-h-[600px] flex flex-col items-center space-y-4  p-2">
      <div className="flex flex-col items-center justify-center space-y-2">
        <div className="rounded-full p-4 flex item-center justify-center bg-orange-600">
          <WifiOff className="w-12 h-12 stroke-gray-50" />
        </div>
        <h1 className="text-base text-orange-600 font-medium">
          Connection error
        </h1>
      </div>

      <p className="text-base text-gray-600 text-center leading-relaxed">
        We're having trouble connecting to the database. Please check your
        internet connection and try again.
      </p>
      <TryAgain reset={reset} />

      <div className=" flex items-start !mt-20 rounded-lg border space-x-2 border-orange-100  dark:bg-midnight-700 bg-orange-50/50 p-4 text-gray-700 dark:text-foreground">
        <Sparkles className="min-w-5 min-h-5 stroke-orange-600" />
        <p className="text-base">
          <span className="text-orange-600  mr-1">Note:</span>
          If the problem persists, please contact support or try again later.
        </p>
      </div>
    </div>
  );
};

export default ConnectionErrorState;

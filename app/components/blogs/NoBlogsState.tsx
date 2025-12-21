import React from "react";
import { FileText, Sparkles } from "lucide-react";

const NoBlogsState = () => {
  return (
    <div className="min-w-[300px] max-w-md min-h-[600px] flex flex-col items-center space-y-4  p-2">
      <div className="flex flex-col items-center justify-center space-y-2">
        <div className="rounded-full p-4 flex item-center justify-center bg-gradient-to-br from-blue-600 to-purple-600">
          <FileText className="w-12 h-12 stroke-gray-50" />
        </div>
        <h1 className="text-base text-blue-600 font-medium">
          No blogs available yet.
        </h1>
      </div>

      <p className="text-base text-gray-600 text-center leading-relaxed">
        It looks like there are no blog posts in the database right now. Check
        back soon for fresh content from our community of writers!
      </p>
      <div className=" flex items-start !mt-20 rounded-lg border space-x-2 border-orange-100 bg-orange-50/50 p-4 text-gray-700">
        <Sparkles className="min-w-7 min-h-7 stroke-blue-600" />
        <p className="text-base">
          <span className="text-blue-600 mr-1">Tip:</span>
          This platform showcases blog posts from various categories including Technology, Design, Travel, and more. New content is being added regularly!
        </p>
      </div>
    </div>
  );
};

export default NoBlogsState;

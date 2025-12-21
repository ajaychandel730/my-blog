import { Loader2, PenSquare } from "lucide-react";
import BounceLoading from "../BounceLoading";

export default function BlogEditorLoading() {
  return (
    <div className="min-h-[100dvh] w-full flex items-center justify-center">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <PenSquare className="w-10 h-10 md:w-16 md:h-16 text-blue-600" />
            <Loader2 className="w-6 h-6 text-blue-600 animate-spin absolute -bottom-2 -right-2" />
          </div>
        </div>
        <h2 className="text-gray-700  mb-2 text-base">Loading Blog Editor</h2>
         <BounceLoading text="Preparing your workspace"/>
      </div>
    </div>
  );
}

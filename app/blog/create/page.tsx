// import { NextUIProvider } from "@nextui-org/system";
import StoreProvider from "@/app/StoreProvider";
import BlogEditor from "../../components/BlogEditor";

export default function Home() {
  return (
    <div className="flex !pt-[7rem] flex-col items-center  min-h-screen px-2 md:p-8 pb-20  font-[family-name:var(--font-geist-sans)]">
      {/* <NextUIProvider> */}
       {/* <StoreProvider> */}
          <BlogEditor />
       {/* </StoreProvider> */}
      {/* </NextUIProvider> */}
    </div>
  );
}

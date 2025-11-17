import CreateNavbar from "@/app/components/blogs/CreateNavbar";
import BlogEditor from "../../components/blogs/BlogEditor";
import ToastProvider from "@/app/ToastProvider";
import StoreProvider from "@/app/StoreProvider";

export default function Home() {
  
  return (
    <>
      <CreateNavbar />
      <div className="flex !pt-[7rem] flex-col items-center  min-h-screen px-2 md:p-8 pb-20  font-[family-name:var(--font-geist-sans)]">
        <StoreProvider>
          <BlogEditor />
        </StoreProvider>
      <ToastProvider/>
    </div>
    </>
    
  );
}

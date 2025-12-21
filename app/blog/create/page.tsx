import CreateNavbar from "@/app/components/blogs/CreateNavbar";
import BlogEditor from "../../components/blogs/BlogEditor";
import StoreProvider from "@/app/StoreProvider";

export default function Home() {
  
  return (
    <>
      <CreateNavbar showNewBlogButton={true}/>
      <div className="flex !pt-[7rem] flex-col items-center  min-h-screen w-full px-2 md:p-8 pb-20  font-[family-name:var(--font-geist-sans)]">
        <StoreProvider>
          <BlogEditor type="draft"/>
        </StoreProvider>
    </div>
    </>
    
  );
}

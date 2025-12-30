
import CreateNavbar from "@/app/components/blogs/CreateNavbar";
import ClientBlogEditor from "@/app/components/blogs/ClientBlogEditor";

export default function Home() {
  
  return (
    <>
      <CreateNavbar showNewBlogButton={true}/>
      <div className="flex !pt-[7rem] flex-col items-center  min-h-screen w-full px-2 md:p-8 pb-20  font-[family-name:var(--font-geist-sans)]">
        <ClientBlogEditor type="draft"/>
    </div>
    </>
    
  );
}

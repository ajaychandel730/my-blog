"use server";
import Header from "./components/Header";
import HomeMainSection from "./components/homePage/HomeMainSection";

export default async function Home() {
  return (
    <div className=" min-h-screen w-full font-[family-name:var(--font-geist-sans)] bg-[#f6f8fc] dark:bg-background">
      <Header />
      <h1 className="sr-only">
        Blogs & Articles on Technology, Lifestyle, Career and More
      </h1>
      <HomeMainSection />
    </div>
  );
}

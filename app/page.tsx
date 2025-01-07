import { Button } from "@nextui-org/button";
import Navbar from "./components/Navbar";
import ToastProvider from "./ToastProvider";
import HomeMainSection from "./components/homePage/HomeMainSection";

export default function Home() {
  return (
    <div className="flexitems-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar/>
       <HomeMainSection/>
       <ToastProvider/>
      </div>
  );
}

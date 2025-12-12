import ToastProvider from "./ToastProvider";
import Header from "./components/Header";
import HomeMainSection from "./components/homePage/HomeMainSection";



export default function Home() {
  return (
    <div className="flex items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
       <Header/>
       <HomeMainSection/>
       <ToastProvider/>
    </div>
  );
}

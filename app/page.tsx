import Header from "./components/Header";
import HomeMainSection from "./components/homePage/HomeMainSection";

export default function Home() {
  return (
    <div className=" min-h-screen w-full font-[family-name:var(--font-geist-sans)]">
        <Header />
        <HomeMainSection />
    </div>
  );
}

import React from "react";
import Header from "../components/Header";
import AboutHeroSection from "../components/aboutPage/AboutHeroSection";
import StorySection from "../components/aboutPage/StorySection";
import QuerySection from "../components/aboutPage/QuerySection";
import MissionSection from "../components/aboutPage/MissionSection";
import ValuesSection from "../components/aboutPage/ValuesSection";
import PersonalNoteSection from "../components/aboutPage/PersonalNoteSection";

const AboutPage = () => {
  return (
    <>
      <Header />
      <div className=" mx-auto px-2 py-12 max-w-[1100px] dark:text-midnight-200">
        <AboutHeroSection />
        <StorySection />
        <QuerySection />
        <MissionSection />
        <ValuesSection />
      </div>
    </>
  );
};

export default AboutPage;

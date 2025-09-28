"use client";

import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import GenAISearch from "@/components/GenaiSearch";
import Separator from "@/components/Separator";
import TopSection from "@/components/TopSection";

export default function Home() {
  return (
    <>
      <TopSection />

      <Separator text="About" />

      <About />

      <Separator text="Ask AI about Anirudh" />

      <GenAISearch />

      <Separator text="Contact Me" />

      <ContactMe />

      <Separator text="Socials" />

      <div className="flex justify-center text-center text-gray-700 dark:text-gray-200 px-8 sm:px-6 lg:px-8 pb-8 text-lg">
        Thank you for scrolling and learning about me.
      </div>
    </>
  );
}

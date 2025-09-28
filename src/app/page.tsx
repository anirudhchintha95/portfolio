"use client";

import Separator from "@/components/general/Separator";

// Sections
import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import GenAISearch from "@/components/AskAI";
import TopSection from "@/components/TopSection";

export default function Home() {
  return (
    <>
      <div id="top">
        <TopSection />
      </div>

      <div id="about">
        <Separator text="About" />
        <About />
      </div>

      <div id="ask-ai">
        <Separator text="Ask AI about Anirudh" />
        <GenAISearch />
      </div>

      <div id="contact">
        <Separator text="Contact Me" />
        <ContactMe />
      </div>

      <div id="thank-you">
        <Separator text="Thank you!" />
        <div className="flex justify-center text-center text-gray-700 dark:text-gray-200 px-8 sm:px-6 lg:px-8 pb-8 text-lg">
          Thank you for scrolling and learning about me.
        </div>
      </div>
    </>
  );
}

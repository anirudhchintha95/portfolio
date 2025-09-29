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
        <Separator text={["Curious about my skills?", "Just ask my AI."]} />
        <GenAISearch />
      </div>

      <div id="contact">
        <Separator text="Contact Me" />
        <ContactMe />
      </div>

      <div id="thank-you">
        <Separator text="Thanks for stopping by!" />
        <div className="flex justify-center flex-col text-center text-gray-700 dark:text-gray-200 px-8 sm:px-6 lg:px-8 pb-8 text-lg">
          <span>Thank you for scrolling and learning about me.</span>
          <div className="mt-4">
            <a
              href="#top"
              className="inline-flex items-center gap-2 text-sm text-gray-600 underline-offset-4 hover:underline dark:text-gray-300"
            >
              ↑ Back to top
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

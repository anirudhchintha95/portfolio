"use client";

import Separator from "@/components/general/Separator";

// Sections
import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import GenAISearch from "@/components/AskAI";
import TopSection from "@/components/TopSection";
import Skills from "@/components/Skills";
import Recommendations from "@/components/Recommendation";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
      <div id="top" className="scroll-mt-12">
        <TopSection />
      </div>

      <div id="about" className="scroll-mt-12">
        <Separator hrefKey="about" text="About" />
        <About />
      </div>

      <div id="ask-ai" className="scroll-mt-12">
        <Separator
          hrefKey="ask-ai"
          text={["Curious about my skills?", "Just ask my AI."]}
        />
        <GenAISearch />
      </div>

      <div id="skills" className="scroll-mt-12">
        <Separator hrefKey="skills" text="Skills" />
        <Skills />
      </div>

      <div id="history" className="scroll-mt-12">
        <Separator hrefKey="history" text="History" />
        <section className="text-center uppercase">Soon to be added...</section>
      </div>

      <div id="projects" className="scroll-mt-12">
        <Separator hrefKey="projects" text="Projects" />
        <Projects />
      </div>

      <div id="recommendations" className="scroll-mt-12">
        <Separator
          hrefKey="recommendations"
          text="What did people say about me?"
        />
        <Recommendations />
      </div>

      <div id="contact" className="scroll-mt-12">
        <Separator hrefKey="contact" text="Let's connect!" />
        <ContactMe />
      </div>

      <div id="thank-you" className="scroll-mt-12">
        <Separator hrefKey="thank-you" text="Thanks for stopping by!" />
        <div className="flex justify-center flex-col text-center text-gray-700 dark:text-gray-200 px-8 sm:px-6 lg:px-8 pb-8 text-lg">
          <span>Thank you for scrolling and learning about me.</span>
          <div className="mt-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm text-gray-600 underline-offset-4 hover:underline dark:text-gray-300"
            >
              ↑ Back to top
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

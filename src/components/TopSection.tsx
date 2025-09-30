import Image from "next/image";
import { useEffect, useState } from "react";

import Ani from "@/../public/Ani.jpeg";
import { LINKED_IN } from "@/constants";

import SocialButton from "./general/SocialButton";
import Button from "./general/Button";

const TopSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);

  return (
    <section className="overflow-hidden sm:grid sm:grid-cols-2">
      <div className="relative p-8 md:p-12 lg:px-16 lg:py-24 flex items-center justify-center">
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage: `
                linear-gradient(to right, var(--line-color) 1px, transparent 1px),
                linear-gradient(to bottom, var(--line-color) 1px, transparent 1px)
              `,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right flex flex-col items-center sm:items-start z-10">
          <h2 className="text-xl font-bold text-gray-900 md:text-3xl dark:text-indigo-100">
            Hi, I am{" "}
            <b className="relative text-3xl sm:text-4xl group inline-block">
              <span className="relative z-10">Anirudh Chintha</span>

              {/* underline (always visible) */}
              <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-indigo-500 dark:bg-indigo-100"></span>

              {/* highlighter */}
              <span
                className={[
                  "absolute inset-x-0 bottom-1 h-8 bg-yellow-300 dark:bg-yellow-500 -z-0 transition-all duration-500",
                  // Mobile: start collapsed → expand after mount
                  mounted ? "w-full delay-200" : "w-0",
                  // Desktop: hover only
                  "sm:w-0 sm:delay-0 sm:group-hover:w-full",
                ].join(" ")}
              />

              {/* dot with ping */}
              <span
                className={[
                  "absolute -right-3 bottom-2 flex items-center justify-center transition-transform duration-300",
                  // Mobile: start hidden → scale in after mount
                  mounted ? "scale-100 delay-700" : "scale-0",
                  // Desktop: hover only
                  "sm:scale-0 sm:delay-700 sm:group-hover:scale-100",
                ].join(" ")}
              >
                {/* ping ring */}
                <span className="absolute inline-flex h-2.5 w-2.5 rounded-full bg-gray-900 dark:bg-indigo-100 opacity-75 animate-ping delay-500"></span>
                {/* solid dot */}
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gray-900 dark:bg-indigo-100"></span>
              </span>
            </b>
            <p className="hidden sm:block !font-pixel mt-2 text-xs text-gray-500 dark:text-gray-400 animate-pulse">
              (psst... hover over my name ✨)
            </p>
          </h2>

          <p className="hidden text-gray-700 md:mt-4 md:block dark:text-gray-300">
            Accomplished Full Stack Developer. Turning ideas into reliable
            products
          </p>

          <div className="mt-4 sm:mt-2 flex items-center gap-2 w-full">
            {/* left-side squiggle: show on mobile */}
            <svg className="hidden sm:block flex-1 h-10 text-indigo-600 dark:text-amber-400">
              <defs>
                <pattern
                  id="squig"
                  width="100"
                  height="50"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M0,25 C25,0 75,50 100,25"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#squig)" />
            </svg>

            {/* left-side line: show on mobile */}
            <span className="sm:hidden flex-1 h-[2px] bg-gradient-to-r from-indigo-800 to-indigo-500 dark:from-amber-500 dark:to-amber-300" />

            {/* buttons */}
            <div className="flex flex-row gap-2">
              <Button
                href="#contact"
                className="bg-gradient-to-r from-indigo-800 to-indigo-500 text-white 
                 hover:from-indigo-900 hover:to-indigo-600 font-pixel"
              >
                {"Let's connect"}
              </Button>
              <SocialButton {...LINKED_IN} primary />
            </div>

            {/* right-side line: show on mobile */}
            <span className="flex-1 bg-gradient-to-l h-[2px] from-indigo-800 to-indigo-500 dark:from-amber-500 dark:to-amber-300 sm:hidden" />
          </div>
        </div>
      </div>

      <Image
        alt=""
        src={Ani}
        className="h-56 w-full object-cover sm:h-full sm:rounded-bl-xl"
      />
    </section>
  );
};

export default TopSection;

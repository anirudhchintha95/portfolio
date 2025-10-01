"use client";

import Image from "next/image";
import Ani from "@/../public/Ani.jpeg";
import { LINKED_IN } from "@/constants";

import SocialButton from "./general/SocialButton";
import Button from "./general/Button";

const TopSection = () => {
  return (
    <section className="relative flex flex-col sm:flex-row items-center sm:items-stretch">
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

      {/* LEFT CONTENT */}
      <div className="flex-1 sm:p-12 lg:px-16 lg:py-24 flex items-center">
        <div className="text-left flex flex-col items-center sm:items-start z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-indigo-100">
            Hi, I am
            <br />
            <b className="relative block text-4xl sm:text-5xl md:text-6xl lg:text-7xl group font-pixel mt-2">
              <span className="relative z-10 text-indigo-900 dark:text-yellow-500">
                {"<"}Anirudh Chintha{" />"}
              </span>
            </b>
          </h2>

          <p className="hidden text-gray-700 md:mt-4 md:block dark:text-gray-300">
            Accomplished Full Stack Developer. Turning ideas into reliable
            products
          </p>

          <div className="mt-4 flex items-center gap-2 w-full">
            {/* left line */}
            <span className="sm:hidden flex-1 h-[2px] bg-gradient-to-r from-indigo-800 to-indigo-500 dark:from-amber-500 dark:to-amber-300" />

            {/* buttons */}
            <div className="flex flex-row gap-2">
              <Button href="#contact" className="font-pixel">
                {"Let's connect"}
              </Button>
              <SocialButton {...LINKED_IN} primary />
            </div>

            {/* right line */}
            <span className="flex-1 h-[2px] bg-gradient-to-l from-indigo-800 to-indigo-500 dark:from-amber-500 dark:to-amber-300 sm:hidden" />
          </div>
        </div>
      </div>

      {/* RIGHT PORTRAIT */}
      <div className="flex justify-end items-center sm:p-12 lg:px-16 lg:py-24 !pl-0">
        <div className="relative w-full h-64 sm:w-72 sm:h-[28rem] rounded-xl overflow-hidden shadow-lg">
          <Image
            alt="Anirudh Chintha"
            src={Ani}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default TopSection;

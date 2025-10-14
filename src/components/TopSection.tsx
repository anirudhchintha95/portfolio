"use client";

import Image from "next/image";

import { AWS_CERTIFIED_DEVELOPER_ASSOCIATE } from "@/constants";
import AWSDeveloperAssociate from "@public/aws-dev-associate.png";
import Ani from "@/../public/Ani.jpeg";
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
      <div className="flex-1 sm:p-12 lg:px-16 lg:py-24 flex items-center my-4 sm:mt-0 ">
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

          <div className="mt-4 w-full">
            <a
              href="https://www.credly.com/badges/b5210351-1c6a-403e-8d34-1086571d6f5f"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-full border border-gray-300/70 bg-white/80 px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-gray-600/60 dark:bg-gray-800/80 dark:text-gray-100"
            >
              <Image
                src={AWSDeveloperAssociate}
                alt={AWS_CERTIFIED_DEVELOPER_ASSOCIATE.title}
                className="inline-flex h-7 w-7"
              />
              <span className="flex flex-col gap-0.5 leading-tight text-left">
                <span className="text-[0.8rem] font-semibold text-gray-800 dark:text-gray-50">
                  {AWS_CERTIFIED_DEVELOPER_ASSOCIATE.title}
                </span>
                <span className="text-[0.7rem] font-medium text-gray-500 dark:text-gray-300">
                  {AWS_CERTIFIED_DEVELOPER_ASSOCIATE.issued} •{" "}
                  {AWS_CERTIFIED_DEVELOPER_ASSOCIATE.expires}
                </span>
              </span>
              <span className="ml-auto text-[0.65rem] font-semibold uppercase tracking-wide text-indigo-500 group-hover:text-indigo-600 dark:text-indigo-300">
                Verify ↗
              </span>
            </a>
          </div>

          <div className="mt-4 flex items-center gap-2 w-full">
            {/* left line */}
            <span className="sm:hidden flex-1 h-[2px] bg-gradient-to-r from-indigo-800 to-indigo-500 dark:from-amber-500 dark:to-amber-300" />

            {/* buttons */}
            <div className="flex flex-row gap-2">
              <Button href="#contact">{"Let's connect"} &rarr;</Button>
            </div>

            {/* right line */}
            <span className="flex-1 h-[2px] bg-gradient-to-l from-indigo-800 to-indigo-500 dark:from-amber-500 dark:to-amber-300 sm:hidden" />
          </div>
        </div>
      </div>

      {/* RIGHT PORTRAIT */}
      <div className="flex justify-end items-center sm:p-12 lg:px-16 lg:py-24 !pl-0">
        <div className="relative w-full h-64 sm:w-72 sm:h-[28rem] rounded-xl overflow-hidden shadow-md">
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

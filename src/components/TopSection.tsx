import Image from "next/image";

import Ani from "@/../public/Ani.jpeg";

const TopSection = () => {
  return (
    <section className="overflow-hidden sm:grid sm:grid-cols-2">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24 flex items-center justify-center">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
            Hi, I am <b>Anirudh Chintha</b>
          </h2>

          <p className="hidden text-gray-500 md:mt-4 md:block dark:text-gray-300">
            Accomplished Full Stack Developer.
          </p>

          <div className="mt-4 md:mt-8">
            <a
              href="#contact-me"
              className="inline-block rounded-sm bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
            >
              Contact Me
            </a>
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

import Image from "next/image";

import QuoteSVG from "@svg/quote.svg";
import React from "react";

const Avatar = ({ name }: { name: string }) => (
  <div className="h-12 w-12 shrink-0 rounded-full flex items-center justify-center dark:bg-white/90 bg-gray-800/90 dark:text-gray-600 text-gray-300">
    <span>{name.split(" ").map((s) => s[0])}</span>
  </div>
);

const MemoisedAvatar = React.memo(Avatar);

const RECOMMENDATIONS = [
  {
    experience: [
      "The team relied on his experience to get a variety of features delivered on time and with quality.",
      "Any engineering team will benefit from having Ani in their ranks.",
    ].join(" "),
    name: "Nishad Patel",
    role: "Engineering Manager",
    link: "https://www.linkedin.com/in/nishadpatel/",
  },
  {
    experience: [
      "From the start, he stood out for his passion, accountability, and eagerness to learn.",
      "He doesn't just take ownership of his work, he actively looks for ways to improve.",
    ].join(" "),
    name: "Alex Wong",
    role: "Distinguished Member of Technical Staff",
    link: "https://www.linkedin.com/in/wongcode/",
  },
  {
    experience: [
      "One of his standout strengths is his ability to pick up new technologies with ease, making him a versatile and reliable contributor to any project.",
      "Beyond work, Anirudh brought great energy to the team.",
    ].join(" "),
    name: "Surendra K",
    role: "Tech Lead",
    link: "https://www.linkedin.com/in/surendra-k-5024b7a7/",
  },
  {
    experience: [
      "Ani's technical expertise and maturity is very evident in his work. He had a large positive impact on the CXM business.",
      "You can rely on Ani to get the job done right, the first time.",
    ].join(" "),
    name: "Emil Stefanacci",
    role: "Agile Coach/Manager, Agile Engineering CoE",
    link: "https://www.linkedin.com/in/stefanacci/",
  },
];

export default function Recommendations() {
  return (
    <section aria-label="Recommendations" className="sm:px-12 lg:px-16">
      <div className="flex flex-wrap justify-center gap-5 text-left">
        {RECOMMENDATIONS.map(({ experience, name, role, link }) => (
          <div
            className="w-80 flex flex-col items-start justify-between shadow-md p-5 rounded-lg bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm"
            key={name}
          >
            <div>
              <Image
                src={QuoteSVG}
                alt="quote"
                className="dark:fill-white/90 fill-gray-800/90"
              />

              <p className="text-sm mt-3 text-gray-600 dark:text-gray-300">
                {experience}
              </p>
            </div>
            <div className="flex gap-3 mt-4 items-center">
              <MemoisedAvatar name={name} />
              <div>
                <a
                  target="_blank"
                  href={link}
                  className="text-lg text-gray-900 dark:text-white font-mediumn hover:underline-offset-4 hover:underline"
                >
                  {name}
                </a>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

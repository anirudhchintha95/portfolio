import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { GiGears } from "react-icons/gi";
import { CgPerformance } from "react-icons/cg";

const ABOUT_CONTENT = [
  {
    key: "full-stack",
    heading: "Full-stack experience",
    description:
      "6+ years of full-stack experience in React, Angulr, NodeJS, PostgreSQL and cloud technologies",
    isFirst: true,
    icon: (
      <HiMiniSquare3Stack3D className="text-amber-500 dark:text-indigo-500 text-6xl" />
    ),
  },
  {
    key: "prod-grade",
    heading: "Production-grade",
    description: "Delivered and maintained reliable production applications",
    icon: <GiGears className="text-amber-500 dark:text-indigo-500 text-6xl" />,
  },
  {
    key: "perf-focused",
    heading: "Performance-focused",
    description: "Experience in enhancing performance and user experience",
    isLast: true,
    icon: (
      <CgPerformance className="text-amber-500 dark:text-indigo-500 text-6xl" />
    ),
  },
];

const About = () => (
  <section aria-label="About" className="sm:px-12 lg:px-16">
    <div className="relative mx-auto grid grid-cols-1 lg:grid-cols-3 px-8">
      {ABOUT_CONTENT.map(
        ({ key, heading, description, icon, isFirst, isLast }) => (
          <div
            key={key}
            className={[
              "py-10 lg:py-0 lg:px-10 border-slate-300 dark:border-amber-500 flex flex-row lg:flex-col items-center gap-4 lg:items-start lg:gap-0",
              isLast ? "" : "lg:border-r lg:border-b-0",
              isFirst ? "!py-0" : "",
              isLast ? "!py-0" : "",
            ].join(" ")}
          >
            <div className="size-20 shrink-0 p-2 bg-indigo-50 border border-indigo-200 rounded flex items-center">
              {icon}
            </div>
            <div className="lg:mt-5 space-y-2">
              <h3 className="text-xl font-bold">{heading}</h3>
              <p className="text-sm">{description}</p>
            </div>
          </div>
        )
      )}
    </div>
  </section>
);

export default About;

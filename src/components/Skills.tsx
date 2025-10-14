import SquareTile, { TileProps } from "./general/SquareTile";
import { FaJsSquare } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { SiRubyonrails } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { SiCsswizardry } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMui } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaJenkins } from "react-icons/fa";
import { SiRedis } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { DiRuby } from "react-icons/di";

const iconClassName = "text-indigo-100 h-4 w-4 brightness-200";

const SKILLS: TileProps[] = [
  {
    title: "React",
    icon: <FaReact className={iconClassName} />,
  },
  {
    title: "Javascript",
    icon: <FaJsSquare className={iconClassName} />,
  },
  {
    title: "Typescript",
    icon: <SiTypescript className={iconClassName} />,
  },
  {
    title: "Angular",
    icon: <FaAngular className={iconClassName} />,
  },
  {
    title: "NodeJS",
    icon: <FaNodeJs className={iconClassName} />,
  },
  {
    title: "Express",
    icon: <SiExpress className={iconClassName} />,
  },
  {
    title: "Ruby on rails",
    icon: <SiRubyonrails className={iconClassName} />,
  },
  {
    title: "PostgreSQL",
    icon: <BiLogoPostgresql className={iconClassName} />,
  },
  {
    title: "MongoDB",
    icon: <SiMongodb className={iconClassName} />,
  },
  {
    title: "Redis",
    icon: <SiRedis className={iconClassName} />,
  },
  {
    title: "HTML5",
    icon: <FaHtml5 className={iconClassName} />,
  },
  {
    title: "CSS",
    icon: <SiCsswizardry className={iconClassName} />,
  },
  {
    title: "Tailwind",
    icon: <RiTailwindCssFill className={iconClassName} />,
  },
  {
    title: "Material UI",
    icon: <SiMui className={iconClassName} />,
  },
  {
    title: "Github",
    icon: <FaGithub className={iconClassName} />,
  },
  {
    title: "AWS",
    icon: <FaAws className={iconClassName} />,
  },
  {
    title: "Jenkins",
    icon: <FaJenkins className={iconClassName} />,
  },
  {
    title: "Python",
    icon: <FaPython className={iconClassName} />,
  },
  {
    title: "Ruby",
    icon: <DiRuby className={iconClassName} />,
  },
];

export default function Skills() {
  return (
    <section aria-label="Skills">
      <div className="flex justify-center gap-6 sm:gap-8 flex-wrap">
        {SKILLS.map(({ title, icon }) => (
          <SquareTile key={title} title={title} icon={icon} variant="small" />
        ))}
      </div>
    </section>
  );
}

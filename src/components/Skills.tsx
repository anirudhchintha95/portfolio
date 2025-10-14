import Image from "next/image";
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

import AWSDeveloperAssociate from "@public/aws-dev-associate.png";
import SquareTile, { TileProps } from "./general/SquareTile";
import HoverGlowCard from "./general/HoverGlow";
import Button from "./general/Button";
import { AWS_CERTIFIED_DEVELOPER_ASSOCIATE } from "@/constants";
import { useToast } from "./general/ToastContext";

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

type Certification = {
  title: string;
  issued: string;
  expires: string;
  credentialId: string;
  href: string;
  blurb: string;
};

const CERTIFICATIONS: Certification[] = [AWS_CERTIFIED_DEVELOPER_ASSOCIATE];

function CertificationCard({
  title,
  issued,
  expires,
  credentialId,
  href,
  blurb,
}: Certification) {
  const { showToast } = useToast();

  const copyCredentialId = () => {
    navigator.clipboard
      .writeText(credentialId)
      .then(() => {
        showToast("Credential copied!");
      })
      .catch(() => {});
  };

  return (
    <HoverGlowCard className="w-full max-w-sm rounded-2xl border border-gray-200/70 bg-white/95 p-6 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg dark:border-gray-600/60 dark:bg-gray-800/95">
      <div className="flex items-start gap-3">
        <Image
          src={AWSDeveloperAssociate}
          alt="AWS Developer Assoicate"
          className="inline-flex h-10 w-10"
        />
        <div>
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
            {title}
          </h4>
          <p className="text-xs font-medium uppercase tracking-wide text-indigo-500 dark:text-indigo-300">
            {issued} · {expires}
          </p>
        </div>
      </div>

      <p className="mt-4 text-sm text-gray-700 dark:text-neutral-200">
        {blurb}
      </p>

      <div className="mt-4 text-xs font-medium text-gray-500 dark:text-neutral-400">
        <p className="uppercase tracking-wide text-gray-500 dark:text-neutral-300">
          Credential ID
        </p>
        <div className="mt-1 inline-flex items-center gap-2">
          <code className="rounded-md bg-gray-100 px-2 py-0.5 font-mono text-gray-700 dark:bg-gray-700 dark:text-gray-100">
            {credentialId}
          </code>
          <button
            type="button"
            onClick={copyCredentialId}
            className="text-[0.65rem] font-semibold uppercase tracking-wide text-indigo-500 transition hover:text-indigo-600 dark:text-indigo-300 cursor-pointer"
          >
            Copy
          </button>
        </div>
      </div>

      <Button
        href={href}
        target="_blank"
        className="mt-5 w-full justify-center"
        variant="outline"
      >
        Verify on Credly ↗
      </Button>
    </HoverGlowCard>
  );
}

export default function Skills() {
  return (
    <section aria-label="Skills">
      <div className="flex justify-center gap-6 sm:gap-8 flex-wrap">
        {SKILLS.map(({ title, icon }) => (
          <SquareTile key={title} title={title} icon={icon} variant="small" />
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center gap-4">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-neutral-400">
          Certifications
        </h3>
        <div className="flex flex-wrap justify-center gap-6">
          {CERTIFICATIONS.map((cert) => (
            <CertificationCard key={cert.title} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
}

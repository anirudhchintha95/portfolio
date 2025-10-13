import { useState } from "react";
import { TiArrowRight } from "react-icons/ti";
import Image, { StaticImageData } from "next/image";

import HomieLogo from "@public/Homie-logo.jpeg";
import ACLogo from "@public/AC.png";
import RTSLogo from "@public/rts.png";

import Modal, { ModalAction } from "./general/Modal";
import Button from "./general/Button";

const ProjectTile = ({
  project: { title, description, bgImage, links },
}: {
  project: ProjectItem;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={[
          "relative group",
          // width and height stuff
          "w-full sm:w-56 h-[400px]",
          // transitions for non-mobile screens
          "sm:flex-grow sm:transition-all sm:duration-500 sm:hover:w-full",
          "cursor-pointer shadow-md",
        ].join(" ")}
        onClick={() => setOpen(true)}
      >
        <Image
          className="h-full w-full object-cover object-center"
          src={bgImage}
          alt={title}
        />
        <div
          className={[
            "absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50",
            // transitions for non-mobile screens
            "sm:opacity-0 sm:group-hover:opacity-100 sm:transition-all sm:duration-300",
          ].join(" ")}
        >
          <h1 className="text-3xl">{title}</h1>
          <p className="text-sm">{description}</p>
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title={title}>
        <p className="text-sm">{description}</p>
        <div className="flex gap-2 mt-4">
          {links?.map(({ label, href, target }) => (
            <Button
              key={label}
              href={href}
              target={target}
              className="!flex items-center flex-row"
            >
              <span>{label}</span> <TiArrowRight />
            </Button>
          ))}
        </div>
      </Modal>
    </>
  );
};

interface ProjectItem {
  title: string;
  description: string;
  bgImage: StaticImageData;
  links?: ModalAction[];
}

const projectList: ProjectItem[] = [
  {
    title: "React Tiny Store",
    bgImage: RTSLogo,
    description:
      "A practical alternative for ad-hoc Context when Context + reducers feel heavy and you want fewer unnecessary re-renders built on useSyncExternalStore.",
    links: [
      {
        label: "Github",
        href: "https://github.com/acoolhq/react-tiny-store",
        target: "_blank",
      },
      {
        label: "NPM",
        href: "https://www.npmjs.com/package/@acoolhq/react-tiny-store",
        target: "_blank",
      },
      {
        label: "Documentation",
        href: "https://acoolhq.github.io/react-tiny-store",
        target: "_blank",
      },
    ],
  },
  {
    title: "Portfolio",
    bgImage: ACLogo,
    description:
      "The website you are visiting right now. Built on NextJS, TailwindCSS and integrated with an AI-powered Q&A feature using OpenAI APIs",
    links: [
      {
        label: "Github",
        href: "https://github.com/anirudhchintha95/portfolio",
        target: "_blank",
      },
    ],
  },
  {
    title: "Homie",
    description:
      "An application that helps you easily find like-minded individuals who are looking for a shared living space. Built on React, NodeJS and MongoDB.",
    bgImage: HomieLogo,
    links: [
      {
        label: "Github",
        href: "https://github.com/anirudhchintha95/Homie",
        target: "_blank",
      },
    ],
  },
];

const Projects = () => {
  return (
    <section
      className={[
        "flex items-center flex-col sm:flex-row gap-6 mx-auto",
        // w-full in mobile, but max-width is provided for other screens so hover affect takes over
        "w-full sm:max-w-4xl",
      ].join(" ")}
    >
      {projectList.map((project) => (
        <ProjectTile key={project.title} project={project} />
      ))}
    </section>
  );
};

export default Projects;

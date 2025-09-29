import Image from "next/image";

import LinkedInSVG from "@svg/linkedin.svg";
import TwitterSVG from "@svg/twitter.svg";
import GithubSVG from "@svg/github.svg";
import EmailSVG from "@svg/email.svg";

const links = [
  {
    href: "https://linkedin.com/in/anirudh-chintha",
    src: LinkedInSVG,
    name: "LinkedIn",
  },
  {
    href: "https://github.com/anirudhchintha95",
    src: GithubSVG,
    name: "Github",
  },
  {
    href: "mailto:anirudhchintha95@gmail.com",
    src: EmailSVG,
    name: "Email",
  },
  {
    href: "https://x.com/InsomniacRests",
    src: TwitterSVG,
    name: "Twitter",
  },
];

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 antialiased">
      <div className="mx-auto max-w-screen-xl px-6 py-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* © left (stacks on mobile) */}
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center sm:text-left">
            &copy; 2025{" "}
            <a
              href="https://linkedin.com/in/anirudh-chintha"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              Anirudh Chintha
            </a>
            . All rights reserved.
          </p>

          {/* Icons centered */}
          <div className="flex items-center justify-center gap-4">
            {links.map(({ href, name, src }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
                title={name}
                className={[
                  // circular dark chip so white icons have contrast in light mode too
                  "group inline-flex h-11 w-11 items-center justify-center rounded-full",
                  "bg-gray-900 dark:bg-gray-700",
                  "transition-all duration-200",
                  "hover:scale-110",
                  // white glow on hover
                  "hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.85)]",
                  // subtle border for definition in light mode
                  "ring-1 ring-black/5 dark:ring-white/5",
                ].join(" ")}
              >
                <Image
                  src={src!}
                  alt={name}
                  className={[
                    "h-6 w-6",
                    "brightness-200",
                    // email icon is already white
                    name === "Email" ? "" : "invert",
                  ].join(" ")}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

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
            <span className="w-8 sm:w-48 h-[2px] bg-gray-900 dark:bg-amber-500"></span>
            {links.map(({ href, name, src }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
                title={name}
                className="relative group"
              >
                <span className="relative flex">
                  <span className="absolute inline-flex h-[45px] w-[45px] -left-[1px] -top-[1px] rounded-full bg-gray-900 dark:bg-gray-700 opacity-0 group-hover:animate-ping group-hover:opacity-75"></span>
                  <span
                    className={[
                      "relative inline-flex h-11 w-11 items-center justify-center rounded-full",
                      "bg-gray-900 dark:bg-gray-700",
                      "transition-all duration-200",
                      "hover:scale-110",
                      "hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.85)]",
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
                  </span>
                </span>
              </a>
            ))}
            <span className="w-8 sm:hidden h-[2px] bg-gray-900 dark:bg-amber-500"></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import TwitterSVG from "@svg/twitter.svg";
import GithubSVG from "@svg/github.svg";
import EmailSVG from "@svg/email.svg";

import SocialButton from "./general/SocialButton";
import { LINKED_IN } from "@/constants";

const links = [
  LINKED_IN,
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
              <SocialButton key={name} href={href} name={name} src={src} />
            ))}
            <span className="w-8 sm:hidden h-[2px] bg-gray-900 dark:bg-amber-500"></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

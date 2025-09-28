import Image from "next/image";

import LinkedInSVG from "@svg/linkedin.svg";
import TwitterSVG from "@svg/twitter.svg";
import GithubSVG from "@svg/github.svg";

const links = [
  {
    href: "https://linkedin.com/in/anirudh-chintha",
    src: LinkedInSVG,
    name: "LinkedIn",
  },
  {
    href: "https://x.com/InsomniacRests",
    src: TwitterSVG,
    name: "Twitter",
  },
  {
    href: "https://github.com/anirudhchintha95",
    src: GithubSVG,
    name: "Github",
  },
];

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow sm:flex sm:items-center sm:justify-between p-4 sm:p-6 xl:p-8 dark:bg-gray-800 antialiased">
      <p className="mb-4 text-sm text-center text-gray-500 dark:text-gray-400 sm:mb-0">
        &copy; 2025{" "}
        <a href="" className="hover:underline">
          Anirudh Chintha
        </a>
        . All rights reserved.
      </p>
      <div className="flex justify-center items-center space-x-1">
        {links.map(({ href, src, name }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            className="group inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            <span className="sr-only">{name}</span>
            <Image
              src={src}
              alt={name}
              color="currentColor"
              className="w-4 h-4 text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600 group-hover:animate-rotate"
            />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;

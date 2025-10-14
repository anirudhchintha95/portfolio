import Image from "next/image";
import AC from "@/../public/AC.png";
import ThemeToggle from "./general/ThemeToggle";

const NAV_ITEMS = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Ask AI",
    href: "#ask-ai",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "History",
    href: "#history",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 sticky top-0 z-50 shadow-md">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 flex justify-center pl-[36px] sm:pl-0 sm:justify-start sm:items-center sm:gap-12">
            <a className="block text-teal-600 dark:text-teal-300" href="#">
              <span className="sr-only">Home</span>
              <Image
                src={AC}
                alt="Anirudh Chintha"
                className="h-12 w-12 rounded"
              />
            </a>
          </div>

          <div className="sm:flex sm:items-center">
            <nav aria-label="Global" className="hidden sm:block">
              <ul className="flex items-center gap-4 text-sm">
                {NAV_ITEMS.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75 hover:underline underline-offset-4"
                      href={href}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

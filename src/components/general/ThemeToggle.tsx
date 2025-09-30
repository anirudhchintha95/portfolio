"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Button from "./Button";

const modes = ["light", "dark", "system"] as const;
const icons: Record<(typeof modes)[number], string> = {
  light: "☀️",
  dark: "🌙",
  system: "🖥",
};

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const activeIndex = modes.indexOf(
    (theme as (typeof modes)[number]) || "system"
  );

  const nextMode = modes[(activeIndex + 1) % modes.length];

  return (
    <>
      {/* Desktop pill toggle */}
      <div
        className="
          hidden sm:inline-flex ml-2 relative w-28 h-8 rounded-full overflow-hidden
          border border-gray-300 dark:border-gray-600 bg-white/70 dark:bg-gray-800/70
        "
      >
        {/* Sliding highlight */}
        <span
          className="
            absolute top-0 left-0 h-full w-1/3 rounded-full
            bg-indigo-500 transition-transform duration-300 ease-in-out
          "
          style={{ transform: `translateX(${activeIndex * 100}%)` }}
        />
        {/* Icons as buttons */}
        {modes.map((mode, i) => (
          <Button
            key={mode}
            onClick={() => setTheme(mode)}
            variant="outline"
            className={`
              flex-1 !px-0 !py-0 !h-8 text-sm z-10 rounded-none border-0 shadow-none
              focus:!ring-0 focus:!outline-none focus:!shadow-none
              ${i === 0 ? "rounded-l-full" : ""}
              ${i === modes.length - 1 ? "rounded-r-full" : ""}
              ${
                theme === mode
                  ? "text-white"
                  : "text-gray-600 dark:text-gray-300"
              }
            `}
          >
            {icons[mode]}
          </Button>
        ))}
      </div>

      {/* Mobile single-tap button */}
      <Button
        onClick={() => setTheme(nextMode)}
        variant="outline"
        className="
          sm:hidden w-9 h-9 flex items-center justify-center !rounded-full
          border border-gray-300 dark:border-gray-600
          bg-white/80 dark:bg-gray-800/80
          shadow-sm hover:scale-105 active:scale-95 transition-all
          text-lg
          focus:!ring-0 focus:!outline-none focus:!shadow-none
        "
      >
        {icons[modes[activeIndex]]}
      </Button>
    </>
  );
}

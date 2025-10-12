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
        className={[
          "hidden sm:inline-flex ml-2 relative w-36 h-10 rounded-full overflow-hidden",
          "border border-gray-300 dark:border-gray-600 bg-white/70 dark:bg-gray-800/70",
          "p-1",
        ].join(" ")}
      >
        {/* Sliding highlight */}
        <span
          className={[
            "absolute top-1 left-1 h-[calc(100%-0.5rem)]",
            "rounded-full bg-indigo-500",
          ].join(" ")}
          style={{
            width: `calc((100% - 0.5rem) / 3)`,
            transform: `translateX(${activeIndex * 100}%)`,
          }}
        />

        {/* Icons as buttons */}
        {modes.map((mode, i) => (
          <Button
            key={mode}
            onClick={() => setTheme(mode)}
            variant="outline"
            className={[
              "flex-1 !px-0 !py-0 !h-full text-sm z-10 !rounded-full border-0 !shadow-none",
              "focus:!ring-0 focus:!outline-none focus:!shadow-none",
              i === 0 ? "rounded-l-full" : "",
              i === modes.length - 1 ? "rounded-r-full" : "",
              theme === mode
                ? "text-white"
                : "text-gray-600 dark:text-gray-300",
            ].join(" ")}
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
          !shadow-md dark:!shadow-md hover:scale-105 active:scale-95 transition-all
          text-lg
          focus:!ring-0 focus:!outline-none focus:!shadow-none
        "
      >
        {icons[modes[activeIndex]]}
      </Button>
    </>
  );
}

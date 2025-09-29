"use client";

import { useState } from "react";
import Button from "./Button";

type Action = {
  label: string;
  href: string;
  target?: "_blank";
  download?: boolean;
};

export default function SquareTile({
  title,
  subtitle,
  icon,
  action,
}: {
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  action?: Action;
}) {
  const [open, setOpen] = useState(false);
  const isContact = !!action;

  return (
    <>
      {/* TILE */}
      <div
        onClick={() => {
          if (isContact && window.innerWidth < 640) {
            setOpen(true);
          }
        }}
        className={[
          "aspect-square w-[7rem] sm:w-[12rem] shadow-md",
          "cursor-pointer sm:cursor-auto relative rounded-2xl p-[1px]",
          "bg-gradient-to-br from-indigo-500/30 via-indigo-400/20 to-indigo-500/30",
          "transition-transform hover:scale-[1.02] active:scale-[0.99] focus:outline-none",
          "group font-pixel",
        ].join(" ")}
      >
        <div
          className={[
            "flex h-full w-full flex-col items-center justify-center gap-2 rounded-2xl shadow-sm relative overflow-hidden",
            "transition-colors duration-200",
            !isContact
              ? "bg-transparent sm:bg-white/90 dark:sm:bg-gray-800/90 sm:backdrop-blur-sm"
              : "bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm",
          ].join(" ")}
        >
          {/* Cross-line overlay */}
          {/* Diagonal line overlay */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-40 group-focus:opacity-40 transition-opacity duration-300 pointer-events-none animate-diagonal-sweep"
            style={{
              backgroundImage: `
                linear-gradient(to right, var(--line-color) 1px, transparent 1px),
                linear-gradient(to bottom, var(--line-color) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />

          {/* Icon */}
          <div
            className={[
              "mb-1 flex h-10 w-10 items-center justify-center rounded-full relative z-10",
              "bg-gray-900 ring-1 ring-black/5 dark:bg-gray-700 dark:ring-white/10",
              "group-hover:animate-bounce group-focus:animate-bounce group-hover:scale-120 group-hover:duration-75 group-hover:animation-delay-100",
            ].join(" ")}
          >
            {icon}
          </div>

          {/* Title */}
          <div className="px-2 text-center relative z-10">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white truncate">
              {title}
            </h3>
            {subtitle && (
              <div className="hidden sm:block mt-0.5 text-xs text-gray-600 dark:text-gray-300 line-clamp-2">
                {subtitle}
              </div>
            )}
          </div>

          {/* Action (desktop only) */}
          {action && isContact && (
            <div className="hidden sm:block relative z-10">
              <Button
                className="!px-3 !py-1 text-xs"
                variant="outline"
                href={action.href}
                target={action.target}
                onClick={(e) => e.stopPropagation()}
                download={action.download}
              >
                {action.label}
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* CONTACT DIALOG */}
      {isContact && open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-sm rounded-xl bg-white dark:bg-gray-800 p-6 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center gap-3">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-gray-900 dark:bg-gray-700">
                {icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {title}
              </h3>
              {subtitle && (
                <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                  {subtitle}
                </p>
              )}
              <div className="flex flex-row gap-2">
                {action && (
                  <Button
                    href={action.href}
                    target={action.target}
                    download={action.download}
                  >
                    {action.label}
                  </Button>
                )}
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

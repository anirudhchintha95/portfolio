"use client";

import { ReactNode, useMemo, useRef, useState } from "react";

import Modal from "./Modal";

export interface TileProps {
  title: string;
  icon: React.ReactNode;
  description?: string;
  modalActions?: Action[];
}

type Action = {
  label: string;
  href: string;
  target?: "_blank";
  download?: boolean;
};

export default function SquareTile({
  title,
  description,
  icon,
  modalActions,

  variant,
  mobileOnlyModal,
  modalClassName,
  modalContentClassName,
  modalContent,
}: TileProps & {
  modalClassName?: string;
  modalContentClassName?: string;
  variant?: "normal" | "small";
  mobileOnlyModal?: boolean;
  modalContent?: () => ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const tileRef = useRef<HTMLDivElement>(null);

  const isSmallVariant = useMemo(() => variant === "small", [variant]);

  const handleClick = () => {
    if (!mobileOnlyModal || window.innerWidth < 640) {
      setOpen(true);
    }
  };

  return (
    <>
      {/* TILE */}
      <div
        ref={tileRef}
        onClick={handleClick}
        className={[
          isSmallVariant ? "w-[4rem] sm:w-[7rem]" : "w-[7rem] sm:w-[12rem]",
          !mobileOnlyModal || window.innerWidth < 640 ? "cursor-pointer" : "",
          "aspect-square shadow-md",
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
            "bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm",
            !mobileOnlyModal || window.innerWidth < 640 ? "cursor-pointer" : "",
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
              isSmallVariant ? "h-8 w-8" : "h-10 w-10",
              "mb-1 flex items-center justify-center rounded-full relative z-10",
              "bg-gray-900 ring-1 ring-black/5 dark:bg-gray-700 dark:ring-white/10",
              "group-hover:scale-120",
              // big screens -> bounce right there
              "sm:group-hover:animate-bounce sm:group-focus:animate-bounce sm:group-hover:duration-75 sm:group-hover:animation-delay-100",
            ].join(" ")}
          >
            {icon}
          </div>

          {/* Title */}
          <div
            className={[
              "px-2 text-center relative z-10",
              isSmallVariant ? "hidden sm:block" : "",
            ].join(" ")}
          >
            <h3
              className={[
                "font-semibold text-gray-900 dark:text-white truncate",
                isSmallVariant ? "text-md sm:text-lg" : "text-lg sm:text-xl",
              ].join(" ")}
            >
              {title}
            </h3>
            {description && (
              <div className="hidden sm:block mt-0.5 text-xs text-gray-600 dark:text-gray-300 line-clamp-2">
                {description}
              </div>
            )}
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={title}
        icon={icon}
        modalClassName={modalClassName}
        modalContentClassName={modalContentClassName}
        actions={modalActions?.length ? modalActions : []}
      >
        {modalContent && modalContent()}
      </Modal>
    </>
  );
}

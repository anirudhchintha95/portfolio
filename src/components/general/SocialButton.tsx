import Image from "next/image";
import React from "react";

const SocialButton = ({
  src,
  href,
  name,
  primary,
}: {
  src: string;
  href: string;
  name: string;
  primary?: boolean;
}) => {
  const buttonColor = primary
    ? "bg-indigo-600"
    : "bg-gray-900 dark:bg-gray-700";
  const ringColor = primary ? "ring-white/5" : "ring-black/5 dark:ring-white/5";

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={name}
      title={name}
      className="relative group"
    >
      <span className="relative flex">
        <span
          className={[
            "absolute inline-flex h-[45px] w-[45px] -left-[1px] -top-[1px] rounded-full opacity-0 group-hover:animate-ping group-hover:opacity-75",
            buttonColor,
          ].join(" ")}
        ></span>
        <span
          className={[
            "relative inline-flex h-11 w-11 items-center justify-center rounded-full",
            buttonColor,
            "transition-all duration-200",
            "hover:scale-110",
            "hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.85)]",
            "ring-1",
            ringColor,
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
  );
};

export default React.memo(SocialButton);

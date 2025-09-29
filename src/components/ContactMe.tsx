"use client";

import Image from "next/image";

import EmailSVG from "@svg/email.svg";
import LocationSVG from "@svg/location.svg";
import FileSVG from "@svg/file.svg";

import SquareTile from "./general/SquareTile";

const EMAIL = "anirudhchintha95@gmail.com";
const CITY = "Jersey City, NJ";
const MAP_URL = `https://www.google.com/maps?q=${encodeURIComponent(CITY)}`;
const RESUME_HREF = "/resume.pdf";

export default function ContactMe() {
  return (
    <section
      aria-label="Contact options"
      className="mx-auto max-w-screen-xl px-6 lg:px-8"
    >
      <div className="flex justify-center gap-6 sm:gap-8 flex-wrap">
        <SquareTile
          title="Email"
          subtitle={EMAIL}
          icon={
            <Image
              src={EmailSVG}
              alt="Email Icon"
              className="h-5 w-5 brightness-200"
            />
          }
          action={{ label: "Open Mail", href: `mailto:${EMAIL}` }}
        />

        <SquareTile
          title="Location"
          subtitle={`Currently in ${CITY}`}
          icon={
            <Image
              src={LocationSVG}
              alt="Location icon"
              className="h-5 w-5 brightness-200"
            />
          }
          action={{ label: "Open Google Maps", href: MAP_URL, target: "_blank" }}
        />

        <SquareTile
          title="Résumé"
          subtitle="PDF, 1-2 pages"
          icon={
            <Image
              src={FileSVG}
              alt="File icon"
              className="h-5 w-5 brightness-200"
            />
          }
          action={{ label: "Download", href: RESUME_HREF, download: true }}
        />
      </div>
    </section>
  );
}

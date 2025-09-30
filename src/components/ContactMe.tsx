"use client";

import Image from "next/image";

import EmailSVG from "@svg/email.svg";
import LocationSVG from "@svg/location.svg";
import FileSVG from "@svg/file.svg";

import SquareTile from "./general/SquareTile";
import Button from "./general/Button";

const EMAIL = "anirudhchintha95@gmail.com";
const CITY = "Jersey City, NJ";
const MAP_URL = `https://www.google.com/maps?q=${encodeURIComponent(CITY)}`;
const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193571.43847488246!2d-74.35874790000001!3d40.7275047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250b78ff5a7b1%3A0x7b12a03c4a77b!2sJersey%20City%2C%20NJ!5e0!3m2!1sen!2sus!4v1727639059094!5m2!1sen!2sus";
const RESUME_HREF = "/resume.pdf";

export default function ContactMe() {
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      // ignore
    }
  }

  return (
    <section
      aria-label="Contact options"
      className="mx-auto max-w-screen-xl px-6 lg:px-8"
    >
      <div className="flex justify-center gap-6 sm:gap-8 flex-wrap">
        <SquareTile
          title="Email"
          description={EMAIL}
          icon={
            <Image
              src={EmailSVG}
              alt="Email Icon"
              className="h-5 w-5 brightness-200"
            />
          }
          modalContent={() => {
            return (
              <div className="flex justify-between items-center">
                <span>{EMAIL}</span>
                <Button onClick={copyEmail}>Copy</Button>
              </div>
            );
          }}
          modalActions={[{ label: "Open Mail", href: `mailto:${EMAIL}` }]}
        />

        <SquareTile
          title="Location"
          description={`Currently in ${CITY}`}
          icon={
            <Image
              src={LocationSVG}
              alt="Location icon"
              className="h-5 w-5 brightness-200"
            />
          }
          modalClassName="!max-w-[80vw] sm:!max-w-[60vw]"
          modalContentClassName="!h-[40vh]"
          modalContent={() => (
            <iframe
              src={MAP_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          )}
          modalActions={[
            {
              label: "Open Google Maps",
              href: MAP_URL,
              target: "_blank",
            },
          ]}
        />

        <SquareTile
          title="Resume"
          description="PDF, 1-2 pages"
          icon={
            <Image
              src={FileSVG}
              alt="File icon"
              className="h-5 w-5 brightness-200"
            />
          }
          modalClassName="!max-w-[80vw] sm:!max-w-[60vw]"
          modalContentClassName="!h-[80vh]"
          modalContent={() => {
            return (
              <iframe
                src="/resume.pdf"
                className="w-full h-full"
                title="Resume"
              />
            );
          }}
          modalActions={[
            { label: "Download", href: RESUME_HREF, download: true },
          ]}
        />
      </div>
    </section>
  );
}

import Image from "next/image";

import EmailSVG from "@svg/email.svg";
import LocationSVG from "@svg/location.svg";

const JerseyCityMapUrl = `http://maps.google.com/maps?q=${encodeURIComponent(
  "Jersey City, NJ"
)}`;

const links = [
  {
    href: "mailto:anirudhchintha95@gmail.com",
    src: EmailSVG,
    name: "Email",
    value: "anirudhchintha95@gmail.com",
  },
  {
    href: JerseyCityMapUrl,
    src: LocationSVG,
    name: "Location",
    value: "Jersey City, NJ",
    target: "_blank",
  },
];

const ContactMe = () => {
  return (
    <section className="flex justify-center max-w-screen px-8 sm:px-6 lg:px-8 gap-2 flex-col sm:flex-row">
      {links.map(({ href, src, name, value, target }) => (
        <a
          key={name}
          className="group border rounded-xl px-4 py-2 text-sm shadow-md cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 focus:outline-hidden border-indigo-600 bg-indigo-600 font-semibold text-white hover:bg-indigo-800 focus:ring-3 text-center sm:text-left"
          href={href}
          target={target || "_self"}
        >
          <Image
            src={src}
            alt={name}
            className="inline h-4 w-4 mr-2 mb-0.5 group-hover:animate-rotate-bounce"
          />
          {value}
        </a>
      ))}
    </section>
  );
};

export default ContactMe;

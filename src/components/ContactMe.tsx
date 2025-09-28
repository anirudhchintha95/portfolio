import Image from "next/image";

import EmailSVG from "@svg/email.svg";
import LocationSVG from "@svg/location.svg";

const JerseyCityMapUrl = `http://maps.google.com/maps?q=${encodeURIComponent(
  "Jersey City"
)}`;

const ContactMe = () => {
  return (
    <div
      id="contact-me"
      className="flex justify-center max-w-screen-xl px-8 sm:px-6 lg:px-8 gap-2 flex-col sm:flex-row"
    >
      <a
        className="border rounded-sm px-4 py-2 text-sm shadow-md cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 focus:outline-hidden border-indigo-600 bg-indigo-600 font-semibold text-white hover:bg-indigo-800 focus:ring-3 text-center sm:text-left"
        href="mailto:anirudhchintha95@gmail.com"
      >
        <Image src={EmailSVG} alt="Email" className="inline h-4 w-4 mr-2 mb-0.5" />
        anirudhchintha95@gmail.com
      </a>

      <a
        className="border rounded-sm px-4 py-2 text-sm shadow-md cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 focus:outline-hidden border-indigo-600 bg-indigo-600 font-semibold text-white hover:bg-indigo-800 focus:ring-3 text-center sm:text-left"
        href={JerseyCityMapUrl}
        target="_blank"
      >
        <Image src={LocationSVG} alt="Email" className="inline h-4 w-4 mr-2 mb-0.5" />
        Jersey City, NJ
      </a>
    </div>
  );
};

export default ContactMe;

"use client";
import { Github, Mail, Linkedin } from "@geist-ui/icons";

const IconButton = ({ id, href, bgColor, children, label }: { id: string, href: string, bgColor: string, children: React.ReactNode, label: string }) => {
  return (
    <button
      id={id}
      type="button"
      aria-label={label}
      className={`mb-2 inline-block rounded ${bgColor} px-6 py-2.5 text-xs text-white focus:outline-none`}
      onClick={(e) => {
        e.preventDefault();
        const win = window.open(href, "_blank");
        if (win) win.focus();
      }}
    >
      {children}
    </button>
  );
};

export default function Contact() {
  return (
    <div id="contact" className="flex flex-col items-center gap-8 p-8">
      <p className="font-semibold text-3xl text-center">Contact me!</p>
      <div
        id="contact-icons"
        className="flex flex-row gap-6 sm:gap-12 p-8 justify-center"
      >
        <IconButton
          id="github"
          href="https://github.com/EeshitaDayani"
          bgColor="bg-gray-800"
          label="GitHub Profile"
        >
          <Github />
        </IconButton>
        <IconButton
          id="linkedin"
          href="https://www.linkedin.com/in/eeshita-dayani-841376224/"
          bgColor="bg-[#0077b5]"
          label="LinkedIn Profile"
        >
          <Linkedin />
        </IconButton>
        <a
          id="mail"
          href="mailto:eeshitadayani@gmail.com"
          aria-label="Email Me"
          className="mb-2 inline-block rounded bg-gray-100 px-6 py-2.5 text-xs font-medium text-black focus:outline-none"
        >
          <Mail />
        </a>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Github, Mail, Linkedin } from "@geist-ui/icons";

const favColor = "blue";

export default function Contact() {
  const [color, setColor] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [correctGuess, setCorrectGuess] = useState(true);

  return (
    <div id="contact" className="flex flex-col gap-8 p-8">
      <p className="font-semibold text-3xl text-center">Contact me!</p>
      {/* <p className="font-semibold text-3xl">
        Guess my favorite color to reveal my contact details!
      </p> */}

      {/* <input
        id="color"
        type="text"
        value={color}
        placeholder="Enter guess"
        className="border-4 border-sky-500 rounded-md p-3 text-md focus:outline-none w-36 place-self-center"
        onChange={(e) => setColor(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            setAttempts(attempts + 1);
            if (color.toLowerCase() === favColor) {
              setCorrectGuess(true);
            }
          }
        }}
        disabled={correctGuess}
      ></input> */}

      {correctGuess && (
        <div>
          {/* <p className="font-semibold text-2xl text-center">Correct!</p> */}

          <div
            id="contact-icons"
            className="flex flex-row justify-between sm:justify-center sm:gap-12 p-8"
          >
            <button
              id="github"
              type="button"
              data-twe-ripple-init
              data-twe-ripple-color="light"
              className="mb-2 inline-block rounded bg-[#333] px-6 py-2.5 text-xs text-white focus:outline-none"
              onClick={(e) => {
                e.preventDefault();
                const win = window.open(
                  "https://github.com/EeshitaDayani",
                  "_blank"
                );
                if (win != null) {
                  win.focus();
                }
              }}
            >
              <Github />
            </button>
            <button
              id="linkedin"
              type="button"
              data-twe-ripple-init
              data-twe-ripple-color="light"
              className="mb-2 inline-block rounded bg-[#0077b5] px-6 py-2.5 text-xs font-medium text-white"
              onClick={(e) => {
                e.preventDefault();
                const win = window.open(
                  "https://www.linkedin.com/in/eeshita-dayani-841376224/",
                  "_blank"
                );
                if (win != null) {
                  win.focus();
                }
              }}
            >
              <Linkedin />
            </button>
            <a
              id="mail"
              href="mailto:eeshitadayani@gmail.com"
              data-twe-ripple-init
              data-twe-ripple-color="light"
              className="mb-2 inline-block rounded bg-gray-100 px-6 py-2.5 text-xs font-medium text-white"
            >
              <Mail color="black" />
            </a>
          </div>
        </div>
      )}
      {!correctGuess && attempts > 0 && (
        <p>Hint: It rhymes with "glue". Keep guessing!</p>
      )}
    </div>
  );
}

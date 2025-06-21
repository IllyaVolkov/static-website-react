"use client";

import { useState } from "react";

const Contact = () => {
  const [btnText, setBtnText] = useState("Get contacted");
  return (
    <section className="container mx-auto px-5 md:px-16 max-w-5xl" id="contact">
      <div
        className="rounded-lg py-16 sm:py-24"
        style={{
          background: "var(--primary-color)",
          color: "var(--text-color-light)",
        }}
      >
        <div className="flex flex-col items-center gap-4 sm:gap-6 w-[90%] md:w-4/5 lg:w-1/2 text-center mx-auto">
          <h2 className="text-2xl sm:text-4xl font-semibold">
            Contact us
          </h2>
          <p className="leading-loose font-[500]">
            Lorem ipsum dolor sit amet consectetur adipisicing elitsed eiusmod
            tempor incididunt labore dolore.
          </p>
          <div className="relative w-full">
            <input
              type="email"
              placeholder="Enter your email address"
              className="rounded-full px-3 py-4 text-center sm:text-left sm:p-6 border-none outline-none w-full font-[500]"
              style={{
                background: "var(--background-color)",
                color: "var(--text-color)",
              }}
            />
            <button
              onClick={() => setBtnText("Submitting...")}
              className="sm:w-fit w-full mt-2 sm:mt-0 capitalize sm:absolute sm:top-2 md:top-[.4rem] sm:right-2 md:text-base text-sm font-semibold py-4 px-7 rounded-full"
              style={{
                background: "var(--secondary-color)",
                color: "var(--text-color-light)",
                border: "2px solid var(--secondary-color)",
                transition: "background 0.2s, border 0.2s, box-shadow 0.2s",
              }}
              onMouseOver={e => {
                (e.currentTarget as HTMLButtonElement).style.background = "var(--secondary-color-2)";
                (e.currentTarget as HTMLButtonElement).style.border = "2px solid var(--secondary-color-2)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 10px var(--secondary-color-2)";
              }}
              onMouseOut={e => {
                (e.currentTarget as HTMLButtonElement).style.background = "var(--secondary-color)";
                (e.currentTarget as HTMLButtonElement).style.border = "2px solid var(--secondary-color)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
              }}
            >
              {btnText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
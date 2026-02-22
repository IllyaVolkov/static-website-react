"use client";

import { useState } from "react";
import { sendEmail } from "../utils/email";

const TO_EMAIL = "contact@madalina-jaeger.com";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async () => {
    if (!email.trim() || !message.trim()) return;
    setStatus("sending");
    const result = await sendEmail({ from_email: email, message, to_email: TO_EMAIL });
    setStatus(result.ok ? "sent" : "error");
    if (result.ok) {
      setEmail("");
      setMessage("");
    }
  };

  const btnLabel = { idle: "Get contacted", sending: "Sending\u2026", sent: "Sent!", error: "Try again" }[status];

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
            Let&apos;s talk change.
          </h2>
          <p className="leading-loose font-[500]">
            Contact us today for a non-committal conversation!
          </p>
          {status === "sent" && (
            <p className="text-sm font-medium" style={{ color: "var(--secondary-color-2)" }}>
              Thanks! We&apos;ll be in touch soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm font-medium text-red-400">
              Something went wrong. Please try again.
            </p>
          )}
          <div className="relative w-full">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="rounded-full px-3 py-4 text-center sm:text-left sm:p-6 border-none outline-none w-full font-[500]"
              style={{
                background: "var(--background-color)",
                color: "var(--text-color)",
              }}
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message"
              className="rounded-full px-3 py-4 mt-8 text-center sm:text-left sm:p-6 border-none outline-none w-full font-[500]"
              style={{
                background: "var(--background-color)",
                color: "var(--text-color)",
              }}
            />
            <button
              onClick={handleSubmit}
              disabled={status === "sending"}
              className="sm:w-fit w-full mt-8 capitalize md:text-base text-sm font-semibold py-4 px-7 rounded-full disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                background: "var(--secondary-color)",
                color: "var(--text-color-light)",
                border: "2px solid var(--secondary-color)",
                transition: "background 0.2s, border 0.2s, box-shadow 0.2s",
              }}
              onMouseOver={e => {
                if (status === "sending") return;
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
              {btnLabel}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

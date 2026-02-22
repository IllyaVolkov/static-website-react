"use client";

import MenuIcon from "@mui/icons-material/Menu";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useState } from "react";

const NAV_LINKS = [
  { label: "home", href: "#home" },
  { label: "services", href: "#services" },
  { label: "contact", href: "#contact" },
  { label: "workshops", href: "#workshops" },
];

const SOCIAL_LINKS = [
  {
    icon: <FacebookOutlinedIcon className="cursor-pointer hover:text-secondary-color-2 text-xl" />,
    label: "Facebook",
  },
  {
    icon: <LinkedInIcon className="cursor-pointer hover:text-secondary-color-2 text-xl" />,
    label: "LinkedIn",
  },
  {
    icon: <InstagramIcon className="cursor-pointer hover:text-secondary-color-2 text-xl" />,
    label: "Instagram",
  },
];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [selectedItem, setSelectedItem] = useState("home");

  return (
    <nav
      className="bg-[var(--primary-color)] w-full z-50 fixed top-0 left-0 py-4 mb-10"
    >
      <div className="container px-5 md:px-16 flex items-center justify-between mx-auto">
        <a className="container flex items-center" href="/">
          <img className="mr-3" src="/logo.png" alt="Logo" width="40"/>
          <h2 className="text-2xl font-bold">
            <span className="text-[var(--text-color-light)]">IGNITE</span>
          </h2>
        </a>

        <div>
          <ul
            className={`${
              toggleMenu ? "left-0" : "-left-full"
            } bg-[var(--primary-color)] text-[var(--text-color-light)] z-50 flex md:items-center gap-1 md:gap-5 lg:gap-10 md:relative absolute top-0 md:left-0 w-80 transition-all duration-500 h-screen md:w-auto md:h-auto flex-col md:flex-row shadow-2xl py-24 px-10 md:p-0 md:shadow-none mr-4`}
          >
            <button
              className="text-[var(--text-color-light)] md:hidden absolute top-6 right-5"
              onClick={() => setToggleMenu(false)}
              aria-label="Close menu"
            >
              <CloseOutlinedIcon />
            </button>
            {NAV_LINKS.map((link) => (
              <li
                key={link.label}
                className={`capitalize border-b md:border-none hover:text-[var(--secondary-color)] transition-colors ${
                  selectedItem === link.label
                    ? "text-[var(--secondary-color-2)] font-semibold"
                    : ""
                }`}
                onClick={() => setSelectedItem(link.label)}
              >
                <a className={`p-4 block`} href={link.href}>{link.label}</a>
              </li>
            ))}
            <div className="md:hidden mx-auto absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </ul>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 md:gap-2 lg:gap-4">
          <a
            href="#contact"
            className="capitalize text-sm sm:text-base border-2 font-semibold sm:py-3 py-2 px-3 sm:px-6 rounded-full
              text-[var(--secondary-color)] border-[var(--secondary-color)] hover:bg-[var(--secondary-color)] hover:text-[var(--text-color-light)] transition-colors text-nowrap"
          >
            Get Started
          </a>
          <button
            aria-label="Open menu"
            className="text-[var(--text-color-light)] md:hidden"
            onClick={() => setToggleMenu(true)}
          >
            <MenuIcon />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
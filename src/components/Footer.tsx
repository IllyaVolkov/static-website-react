"use client";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/",
    icon: <FacebookOutlinedIcon />,
    label: "Facebook",
  },
  {
    href: "https://www.linkedin.com/",
    icon: <LinkedInIcon />,
    label: "LinkedIn",
  },
  {
    href: "https://twitter.com/",
    icon: <TwitterIcon />,
    label: "Twitter",
  },
  {
    href: "https://www.instagram.com/",
    icon: <InstagramIcon />,
    label: "Instagram",
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-[var(--secondary-color)] bg-[var(--primary-color)] p-4 text-[var(--text-color-light)]">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-6">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="transition-all hover:text-[var(--secondary-color-2)] hover:-translate-y-1"
            >
              {social.icon}
            </a>
          ))}
        </div>
        <p className="mt-4 text-xs text-[var(--text-color-light)]">
          © 2025 Ignite - All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
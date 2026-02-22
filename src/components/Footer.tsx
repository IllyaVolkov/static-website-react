"use client";

import LinkedInIcon from "@mui/icons-material/LinkedIn";

const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/company/ignite-motivation/about/?viewAsMember=true",
    icon: <LinkedInIcon />,
    label: "LinkedIn",
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
              className="group flex items-center gap-1.5 transition-all hover:text-[var(--secondary-color-2)] hover:-translate-y-1"
            >
              {social.icon}
              <span className="text-sm font-medium transition-colors duration-200 group-hover:text-[var(--secondary-color-2)]">
                {social.label}
              </span>
            </a>
          ))}
        </div>
        <p className="mt-4 text-xs text-[var(--text-color-light)]">
          © 2026 Ignite - All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
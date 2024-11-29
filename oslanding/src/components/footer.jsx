import * as React from "react";
import Linkedin from '../Assets/linkedin.svg';
import Instagram from '../Assets/Instagram.svg';
import Twitter from '../Assets/Twitter.svg';
import Logo from '../Assets/Logo.png';

export default function Footer() {
  const socialLinks = [
    {
      icon: Linkedin,
      alt: "Linkedin",
      href: "https://www.linkedin.com/company/optimum-sync/", // Added the link for LinkedIn
    },
    {
      icon: Instagram,
      alt: "Instagram",
      href: "https://www.instagram.com/optimum_sync?igsh=MXFsZ2IyeXFrZTk0cQ==", // Placeholder for Instagram
    },
    {
      icon: Twitter,
      alt: "Twitter",
      href: "https://x.com/OptimumSync?t=ilhcHl_hBOxBfZqjSioRzA&s=09", // Placeholder for Twitter
    },
  ];  

  return (
    <footer className="flex z-0 flex-col justify-center w-full max-md:max-w-full">
      <div className="flex flex-col justify-center items-center px-4 pt-16 w-full bg-neutral-300 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 justify-between items-center max-w-full w-[1120px]">
          <div className="flex flex-wrap gap-9 items-center self-stretch my-auto text-base text-black min-w-[240px] w-[873px] max-md:max-w-full">
            <img
              loading="lazy"
              src={Logo}
              alt="Optimum Sync Footer Logo"
              className="object-contain self-stretch my-auto aspect-[3.77] min-h-[86px] min-w-[240px] w-[324px]"
            />
            <p className="self-stretch my-auto leading-6 min-w-[240px] w-[310px]">
              Reach Your Goals With Our Professional Solutions. We provide
              expert-driven solutions that empower businesses to achieve their
              goals.
            </p>
            <nav className="flex gap-10 items-start self-stretch my-auto">
              <div className="flex flex-col justify-center">
                <a href="/" className="mb-4" tabIndex="0">
                  Home
                </a>
                <a href="/about" className="mb-4 text-stone-950" tabIndex="0">
                  About Us
                </a>
                <a href="/contact" tabIndex="0">
                  Contact Us
                </a>
              </div>
            </nav>
          </div>
          <div className="flex gap-3 justify-center items-center self-stretch mx-auto my-auto">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href} // Use the href from the socialLinks array
                target="_blank" // Opens the link in a new tab
                rel="noopener noreferrer" // For security
                className="flex overflow-hidden justify-center items-center self-stretch border-2 border-solid bg-white bg-opacity-0 border-stone-950 rounded-full p-2 sm:p-2.5 md:p-3 lg:p-3.5"
                tabIndex="0"
                aria-label={link.alt}
              >
                <img
                  loading="lazy"
                  src={link.icon}
                  alt={link.alt}
                  className="object-contain w-6 sm:w-6 md:w-7 lg:w-6"
                />
              </a>
            ))}
          </div>
        </div>
        <div className="py-6 mt-16 max-w-full text-lg leading-loose border-t border-solid border-t-zinc-300 text-stone-950 w-[1120px] max-md:mt-10 max-md:max-w-full">
          Copyright @ 2024 Optimum Sync, All rights reserved.
        </div>
      </div>
    </footer>
  );
}

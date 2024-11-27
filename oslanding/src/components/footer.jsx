import * as React from "react";

export default function Footer() {
  const socialLinks = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/531267df82d94c7ab63759c540d3bfd2/b13444cb584984331f91752c17594002f460faa913828ae82ee21ce288f0dac2?apiKey=531267df82d94c7ab63759c540d3bfd2&", alt: "Facebook" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/531267df82d94c7ab63759c540d3bfd2/ff48fa2f9405fc29ef257325a447d3176278f7338ffbc177b45fd37ad79cc0b9?apiKey=531267df82d94c7ab63759c540d3bfd2&", alt: "Twitter" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/531267df82d94c7ab63759c540d3bfd2/22efbda440c89bf713eb5fd59030b3d8d2958f43d14a5134a65dec20ceee40a9?apiKey=531267df82d94c7ab63759c540d3bfd2&", alt: "LinkedIn" }
  ];

  return (
    <footer className="flex z-0 flex-col justify-center w-full max-md:max-w-full">
      <div className="flex flex-col justify-center items-center px-4 pt-16 w-full bg-neutral-300 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 justify-between items-center max-w-full w-[1120px]">
          <div className="flex flex-wrap gap-9 items-center self-stretch my-auto text-base text-black min-w-[240px] w-[873px] max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/531267df82d94c7ab63759c540d3bfd2/36f0360979050375f98290832d412f82e1abab0ccb8d5746791ff8aaa2d4dd1a?apiKey=531267df82d94c7ab63759c540d3bfd2&"
              alt="Optimum Sync Footer Logo"
              className="object-contain self-stretch my-auto aspect-[3.77] min-h-[86px] min-w-[240px] w-[324px]"
            />
            <p className="self-stretch my-auto leading-6 min-w-[240px] w-[310px]">
              Reach Your Goals With Our Professional Solutions. We provide expert-driven solutions that empower businesses to achieve their goals
            </p>
            <nav className="flex gap-10 items-start self-stretch my-auto">
              <div className="flex flex-col justify-center">
                <a href="/" className="mb-4" tabIndex="0">Home</a>
                <a href="/about" className="mb-4 text-stone-950" tabIndex="0">About Us</a>
                <a href="/contact" tabIndex="0">Contact US</a>
              </div>
            </nav>
          </div>
          <div className="flex gap-2.5 justify-center items-center self-stretch my-auto">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="flex overflow-hidden justify-center items-center self-stretch px-6 my-auto border-2 border-solid bg-white bg-opacity-0 border-stone-950 h-[60px] min-h-[60px] rounded-[857.143px] w-[60px] max-md:px-5"
                tabIndex="0"
                aria-label={link.alt}
              >
                <img
                  loading="lazy"
                  src={link.icon}
                  alt={link.alt}
                  className="object-contain self-stretch my-auto w-4 aspect-[0.53] fill-stone-950"
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
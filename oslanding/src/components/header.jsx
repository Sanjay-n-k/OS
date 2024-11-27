import * as React from "react";

export default function Header() {
  return (
    <header className="flex overflow-hidden z-0 flex-col justify-center w-full text-sm font-semibold leading-none bg-stone-50 min-h-[100px] text-zinc-600 max-md:max-w-full max-sm:min-h-[93px]">
      <nav className="flex flex-wrap gap-10 justify-between items-center px-4 py-2 w-full bg-stone-50 min-h-[99px] max-md:max-w-full max-sm:gap-20 max-sm:justify-center max-sm:pb-5 max-sm:mx-auto max-sm:h-auto max-sm:grow-0 max-sm:min-h-[33px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/531267df82d94c7ab63759c540d3bfd2/86a18737a0f38e4f4ea39e92001eed2d36c0d02670178282ca8a2aaadc7fa983?apiKey=531267df82d94c7ab63759c540d3bfd2&"
          alt="Optimum Sync Logo"
          className="object-contain shrink-0 self-stretch my-auto aspect-[100] min-h-[86px] min-w-[240px] w-[313px] max-sm:self-center max-sm:w-full max-sm:max-w-[225px]"
        />
        <div className="flex justify-center items-center self-stretch my-auto min-w-[240px]">
          <a href="/" className="gap-2.5 self-stretch px-3 py-2 my-auto whitespace-nowrap" tabIndex="0">Home</a>
          <a href="/about" className="gap-2.5 self-stretch px-3 py-2 my-auto" tabIndex="0">About Us</a>
          <a href="/contact" className="gap-2.5 self-stretch px-3 py-2 my-auto w-[101px]" tabIndex="0">Contact Us</a>
        </div>
      </nav>
    </header>
  );
}
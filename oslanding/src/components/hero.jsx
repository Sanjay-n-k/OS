import * as React from "react";

export default function Hero() {
  return (
    <section className="flex overflow-hidden z-0 justify-center items-start w-full bg-white min-h-[748px] max-md:max-w-full">
      <div className="flex flex-col flex-1 shrink justify-center w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col justify-center py-52 w-full bg-center bg-no-repeat bg-cover bg-[url(https://cdn.builder.io/api/v1/image/assets%2F531267df82d94c7ab63759c540d3bfd2%2Fae12196b22654b79992c6daf5a1267b1)] min-h-[748px] max-md:py-24 max-md:max-w-full max-sm:h-[614px] max-sm:min-h-[265px]">
          <div className="flex flex-col justify-center px-4 w-full max-md:max-w-full">
            <div className="flex flex-col items-center w-full text-center max-md:max-w-full">
              <div className="flex flex-col max-w-full w-[1120px]">
                <div className="self-center text-xl font-medium leading-none text-zinc-50">
                  --- Igniting Innovation ---
                </div>
                <h1 className="mt-1 text-7xl font-semibold tracking-tighter text-white leading-[90px] max-md:max-w-full max-md:text-4xl max-md:leading-[55px] max-sm:text-3xl max-sm:font-medium">
                  Innovative Solutions for a Future-Driven World
                </h1>
              </div>
              <p className="mt-5 text-base leading-6 text-zinc-50 w-[950px] max-md:max-w-full max-sm:text-sm">
                Optimum Sync delivers cutting-edge IT solutions, specializing in cloud services, AI, cybersecurity, and data science. From web development to hardware assembly, we empower industries with innovative technologies built for the future.
              </p>
            </div>
            <button className="overflow-hidden gap-1.5 self-center px-4 py-2.5 mt-8 text-base font-semibold bg-indigo-700 rounded-lg border border-indigo-700 border-solid shadow-sm text-zinc-50" tabIndex="0">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
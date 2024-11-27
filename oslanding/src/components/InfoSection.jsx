import * as React from "react";

export default function InfoSection({ title, description, imageSrc, imageAlt, isReversed, bgColor }) {
  const content = (
    <>
      <div className="flex overflow-hidden flex-col justify-center items-center self-stretch my-auto rounded-3xl min-h-[500px] min-w-[240px] w-[544px] max-md:max-w-full max-sm:self-center max-sm:pb-4 max-sm:h-0 max-sm:min-h-0 max-sm:w-[498px]">
        <img
          loading="lazy"
          src={imageSrc}
          alt={imageAlt}
          className="object-contain max-w-full rounded-3xl aspect-[2.23] w-[544px]"
        />
      </div>
      <div className="flex flex-col justify-center self-stretch my-auto min-h-[390px] min-w-[240px] w-[568px] max-md:max-w-full">
        <h2 className="text-5xl font-medium tracking-tighter leading-none text-stone-950 max-md:max-w-full max-md:text-4xl">
          {title}
        </h2>
        <div className="flex flex-col mt-10 max-w-full text-2xl leading-9 h-[198px] text-neutral-950 w-[568px]">
          <div className="pb-3 w-full border-b border-solid border-b-zinc-300 min-h-[222px] max-md:max-w-full">
            {description}
          </div>
        </div>
      </div>
    </>
  );

  return (
    <section className={`flex z-0 flex-col justify-center w-full ${bgColor} min-h-[629px] max-md:max-w-full`}>
      <div className="flex flex-wrap gap-8 justify-center items-center px-4 py-16 w-full min-h-[629px] max-md:max-w-full">
        {isReversed ? content : content}
      </div>
    </section>
  );
}
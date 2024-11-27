import * as React from "react";

export default function ServiceCard({ title, description, imageSrc, imageAlt }) {
  return (
    <div className="flex flex-wrap flex-1 shrink gap-8 justify-center items-center self-stretch p-6 my-auto rounded-3xl border border-solid basis-0 border-zinc-300 min-w-[240px] max-md:px-5 max-md:max-w-full">
      <div className="flex overflow-hidden justify-center items-center self-stretch my-auto min-h-[150px] w-[150px]">
        <img
          loading="lazy"
          src={imageSrc}
          alt={imageAlt}
          className="object-contain self-stretch my-auto rounded-3xl aspect-square w-[150px]"
        />
      </div>
      <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px]">
        <h3 className="text-2xl font-medium leading-none text-stone-950">
          {title}
        </h3>
        <p className="mt-3 text-base leading-6 text-zinc-500">
          {description}
        </p>
      </div>
    </div>
  );
}
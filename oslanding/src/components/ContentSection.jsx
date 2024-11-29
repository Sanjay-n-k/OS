import React from 'react';
export default function ContentSection({
    title,
    description,
    imageSrc,
    imageAlt,
    isReversed,
    bgColor = 'bg-white',
  }) {
    const contentOrder = isReversed ? 'md:flex-row-reverse' : 'md:flex-row'; // Adjust for mobile view
    return (
      <div className={`flex flex-col justify-center w-full min-h-[520px]`}>
        <div
          className={`flex flex-col justify-center items-center px-4 py-9 w-full ${bgColor} min-h-[519px] max-md:max-w-full`}
        >
          <div
            className={`flex flex-wrap gap-8 justify-center items-center max-w-full w-[1120px] ${contentOrder} flex-col`}
          >
            <div className="flex flex-col grow shrink justify-center items-center self-stretch my-auto text-center border border-solid border-zinc-300 min-h-[450px] min-w-[240px] w-[435px] max-md:max-w-full">
              <div className="flex flex-col justify-center items-center max-w-full w-[440px]">
                <h2 className="text-3xl font-medium leading-none text-stone-950">
                  {title}
                </h2>
                <p className="mt-5 text-base leading-6 text-zinc-500 max-md:max-w-full">
                  {description}
                </p>
              </div>
            </div>
            {imageSrc && (
              <div className="flex overflow-hidden flex-col grow shrink justify-center items-center self-stretch my-auto min-h-[450px] min-w-[240px] w-[435px] max-md:max-w-full max-sm:w-full">
                <img
                  loading="lazy"
                  src={imageSrc}
                  alt={imageAlt}
                  className="object-contain max-w-full rounded-3xl aspect-[1.21] w-[544px] max-sm:w-full"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
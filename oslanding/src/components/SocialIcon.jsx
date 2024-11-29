import React from 'react';

export const SocialIcon = ({ src, alt }) => (
  <div className="flex overflow-hidden justify-center items-center self-stretch px-2.5 my-auto border border-solid bg-white bg-opacity-0 border-stone-950 h-[80px] min-h-[80px] rounded-[500px] w-[80px]">
    <img loading="lazy" src={src} alt={alt} className="object-contain aspect-square fill-stone-950 w-[15px]" />
  </div>
);
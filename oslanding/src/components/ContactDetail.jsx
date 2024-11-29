import React from 'react';

export const ContactDetail = ({ icon, title, content }) => (
  <div className="flex gap-3.5 items-start">
    <img loading="lazy" src={icon} alt={'${title} icon'} className="object-contain shrink-0 aspect-square w-[30px]" />
    <div className="flex flex-col">
      <div className="text-xl font-medium text-stone-950">{title}</div>
      <div className="mt-2.5 text-base text-zinc-500">{content}</div>
    </div>
  </div>
);
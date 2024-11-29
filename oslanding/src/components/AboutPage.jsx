import React from 'react';
import ContentSection from './ContentSection';
import Footer from './footer';
import Header from './header';
export default function AboutPage() {
  const sections = [
    {
      title: 'Our Mission',
      description: 'At Optimum Sync, our mission is to empower emerging ventures by providing innovative technological solutions that help overcome operational challenges. We are dedicated to bridging the gap between ambition and execution, enabling businesses to scale seamlessly and navigate the complexities of the modern tech landscape.',
      imageSrc: 'https://cdn.builder.io/api/v1/image/assets/531267df82d94c7ab63759c540d3bfd2/edb8031a2f8a5914fc7296bdc5ea2430074415ead33b35ac1919538d6734786a?apiKey=531267df82d94c7ab63759c540d3bfd2&',
      imageAlt: 'Our Mission Illustration',
      bgColor: 'bg-white'
    },
    {
      title: 'Our Vision',
      description: 'To be the leading partner for emerging ventures, driving innovation and seamless growth by providing cutting-edge technology solutions that remove barriers, foster efficiency, and unlock new possibilities for success in an ever-evolving digital world.',
      imageSrc: 'https://cdn.builder.io/api/v1/image/assets/531267df82d94c7ab63759c540d3bfd2/5421d8fcd548240c0bd92b135ae6607fc50c6f8f223ce402ee91d6100e6f613e?apiKey=531267df82d94c7ab63759c540d3bfd2&',
      imageAlt: 'Our Vision Illustration',
      bgColor: 'bg-sky-50',
      isReversed: true
    },
    {
      title: 'Target Market',
      description: "Optimum Sync's target market includes emerging ventures, startups, and small to medium-sized businesses across various industries, seeking innovative technology solutions to overcome operational challenges and scale efficiently. The company serves businesses looking to improve their digital infrastructure, enhance efficiency, and drive growth through cutting-edge tech. This includes sectors like e-commerce, healthcare, finance, education, and professional services, where companies need scalable, customized solutions to thrive in an evolving digital landscape.",
      imageSrc: 'https://cdn.builder.io/api/v1/image/assets/531267df82d94c7ab63759c540d3bfd2/0acf1d81354d09d8dedf813c8ce59fd147db982908a658be568b13bec743896f?apiKey=531267df82d94c7ab63759c540d3bfd2&',
      imageAlt: 'Target Market Illustration',
      bgColor: 'bg-white'
    }
  ];  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <Header />
      <div className="flex z-10 flex-wrap gap-3 items-center self-center mt-4 text-5xl font-medium tracking-tighter leading-none text-center text-stone-950 max-md:max-w-full max-md:text-4xl">
        <div className="shrink-0 self-stretch my-auto h-px border border-black border-solid w-[120px] max-sm:hidden" />
        <h1 className="self-stretch my-auto w-[446px] max-md:max-w-full max-md:text-4xl max-sm:text-4xl">
          Igniting Innovation
        </h1>
        <div className="shrink-0 self-stretch my-auto h-0 border border-black border-solid w-[120px] max-sm:hidden" />
      </div>      {sections.map((section, index) => (
        <ContentSection
          key={index}
          title={section.title}
          description={section.description}
          imageSrc={section.imageSrc}
          imageAlt={section.imageAlt}
          bgColor={section.bgColor}
          isReversed={section.isReversed}
        />
      ))}      <Footer />
    </div>
  );
}




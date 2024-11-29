import * as React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import InfoSection from "./components/InfoSection";
import ServiceCard from "./components/ServiceCard";
import Footer from "./components/footer";
import cloud from "./Assets/cloud.svg";
import webiste from "./Assets/website.svg";
import AI from "./Assets/AI.svg";
import digital from "./Assets/digital.svg";
import Whoweare from "./Assets/Whoweare.svg";
import whytrust from "./Assets/whytrust.svg";
import whatdoing from "./Assets/whatdoing.svg";
import "./index.css"



const services = [
  {
    title: "Cloud Services",
    description: "Scalable and secure cloud solutions tailored to your business needs",
    imageSrc: cloud ,
    imageAlt: "Cloud Services Icon"
  },
  {
    title: "Web & Mobile Development",
    description: "Creating user-friendly web and mobile applications that drive engagement.",
    imageSrc: webiste,
    imageAlt: "Web Development Icon"
  },
  {
    title: "AI & Data Science",
    description: "Leveraging AI and data analytics for smarter decision-making & automation.",
    imageSrc: AI ,
  },
  {
    title: "Digital Marketing",
    description: "Tailored strategies to enhance your online presence and grow your brand.",
    imageSrc: digital , 
    imageAlt: "Digital Marketing Icon"
  }
];

export default function OptimumSyncPage() {
  return (
    <div className="flex overflow-hidden relative flex-col bg-white">
      <Header />
      <Hero />
      <InfoSection
        title="Who We Are"
        description="Optimum Sync is an innovative IT company specializing in cloud services, AI, cybersecurity, and data science. We build smart applications, offer expert consultancy, and drive research in cutting-edge technologies to shape the future of global tech."
        imageSrc = {Whoweare}
        imageAlt="Who We Are Image"
        bgColor="bg-sky-50"
      />
      <InfoSection
        title="What We Are Doing"
        description="At Optimum Sync, we craft advanced IT solutions, from cloud services and cybersecurity to AI and data science. Our team develops dynamic applications, offers strategic consultancy, and leads research to drive innovation across industries."
        imageSrc= {whatdoing}
        imageAlt="What We Do Image"
        bgColor="bg-white"
        isReversed={true}
      />
      <InfoSection
        title="Why Trust Us"
        description="At Optimum Sync, we prioritize quality, innovation, and expertise. Our team combines deep technical knowledge with industry experience to deliver reliable, future-ready solutions. We're committed to driving real results for your business."
        imageSrc= {whytrust}
        imageAlt="Why Trust Us Image"
        bgColor="bg-sky-50"
      />
      <section className="flex z-0 flex-col justify-center w-full max-md:max-w-full">
        <div className="flex flex-col justify-center items-center px-4 py-24 w-full max-md:max-w-full">
          <div className="flex flex-col justify-center max-w-full text-center w-[1120px]">
            <h2 className="w-full text-5xl font-medium tracking-tighter leading-none text-stone-950 max-md:max-w-full max-md:text-4xl">
              What We Are Offering
            </h2>
            <p className="self-center mt-5 text-base text-zinc-500 max-md:max-w-full">
              Delivering innovative, reliable solutions across IT and Technology.
            </p>
          </div>
          <div className="flex flex-col justify-center mt-12 max-w-full w-[1120px] max-md:mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
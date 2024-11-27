import * as React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import InfoSection from "./components/InfoSection";
import ServiceCard from "./components/ServiceCard";
import Footer from "./components/footer";
import "./index.css"



const services = [
  {
    title: "Cloud Services",
    description: "Scalable and secure cloud solutions tailored to your business needs",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/531267df82d94c7ab63759c540d3bfd2/19503f1af6cbc8e0522833ebcd7085b10481f28a530482a116b78cd4e8685e55?apiKey=531267df82d94c7ab63759c540d3bfd2&",
    imageAlt: "Cloud Services Icon"
  },
  {
    title: "Web & Mobile Development",
    description: "Creating user-friendly web and mobile applications that drive engagement.",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/531267df82d94c7ab63759c540d3bfd2/1995e10d26d7fe469ea7e1065e18598b80e830e7467b6cb28dc8d19f5ad49a05?apiKey=531267df82d94c7ab63759c540d3bfd2&",
    imageAlt: "Web Development Icon"
  },
  {
    title: "AI & Data Science",
    description: "Leveraging AI and data analytics for smarter decision-making & automation.",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/531267df82d94c7ab63759c540d3bfd2/db8a262de7ca40373fc4bd1a360ab26925eae39386f0d8875d6dfc391e787889?apiKey=531267df82d94c7ab63759c540d3bfd2&",
    imageAlt: "AI Icon"
  },
  {
    title: "Digital Marketing",
    description: "Tailored strategies to enhance your online presence and grow your brand.",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/531267df82d94c7ab63759c540d3bfd2/58436125b3f0015770954ef291481c54158562f9a761db694466e4a67d8b6d60?apiKey=531267df82d94c7ab63759c540d3bfd2&",
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
        imageSrc="https://cdn.builder.io/api/v1/image/assets/531267df82d94c7ab63759c540d3bfd2/6c1754cbc7affbb3fb85354a8fb5f432dc9cf8175d4a874d68b59b4c65944057?apiKey=531267df82d94c7ab63759c540d3bfd2&"
        imageAlt="Who We Are Image"
        bgColor="bg-sky-50"
      />
      <InfoSection
        title="What We Are Doing"
        description="At Optimum Sync, we craft advanced IT solutions, from cloud services and cybersecurity to AI and data science. Our team develops dynamic applications, offers strategic consultancy, and leads research to drive innovation across industries."
        imageSrc="https://cdn.builder.io/api/v1/image/assets/531267df82d94c7ab63759c540d3bfd2/0d80e2c63e9aabb05074749026b8fe8dafa9bf0735d7c08e47553eb958988974?apiKey=531267df82d94c7ab63759c540d3bfd2&"
        imageAlt="What We Do Image"
        bgColor="bg-white"
        isReversed={true}
      />
      <InfoSection
        title="Why Trust Us"
        description="At Optimum Sync, we prioritize quality, innovation, and expertise. Our team combines deep technical knowledge with industry experience to deliver reliable, future-ready solutions. We're committed to driving real results for your business."
        imageSrc="https://cdn.builder.io/api/v1/image/assets/531267df82d94c7ab63759c540d3bfd2/c43ce6e53d50d7ed6d91987f745568202f8b7cfa86fa20450cb3d4a67558c8c6?apiKey=531267df82d94c7ab63759c540d3bfd2&"
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
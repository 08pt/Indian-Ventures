import React from "react";
import slider1 from "@/assets/slider/slider1.png";
import slider2 from "@/assets/slider/slider2.png";
import slider3 from "@/assets/slider/slider3.png";
import slider4 from "@/assets/slider/slider4.png";
import Carousel from "../Slider/slider";
import Heading from "../UIElements/Heading";
import ServiceSection from "./ServiceSection";
import service1 from "@/assets/services/service1.png";
import service2 from "@/assets/services/service2.png";
import service3 from "@/assets/services/service3.png";
import service4 from "@/assets/services/service4.png";
import service5 from "@/assets/services/service5.png";
import TechSection from "./Tech/TechSection";
import Industries from "./industries";
import Testimonials from "./Testimonials";
import Form from "./Form";
import Brands from "./Brands";
import Link from "next/link";

function HeroSection() {
  const services = [
    {
      image: service1,
      title: "Creative Agency",
      content: `Provoking powerful decisions with Branding solutions `,
    },

    {
      image: service2,
      title: "Startup Solutions",
      content: `Putting big brand experience to work for startups and SMBs.`,
    },

    {
      image: service3,
      title: "Innovative Web Solutions",
      content: `Let's create the best website to build your online presence.`,
    },
    {
      image: service4,
      title: "Mobile Application Design",
      content: `Bring your brand in everyone's hand with your smart mobile application.`,
    },
    {
      image: service5,
      title: "Digital Marketing",
      content: `We as digital marketers allows businesses to target specific audiences and track the success of their campaigns in real-time.`,
    },
  ];

  return (
    <div className=" justify-center h-auto space-y-10 mb-1 manrope">
      <Carousel
        images={[slider1, slider2, slider3, slider4]}
        h={600}
        w={1512}
      />
      <Heading>Our Services</Heading>
      <p className="text-center font-normal text-lg">
        No Compromise Solution To Your Web Or App Development
      </p>
      <ServiceSection services={services} />
      <Link href="/services">
        <button className="relative mt-10 text-sm sm:text-lg manrope sm:px-10 px-7 py-2 rounded-lg flex justify-center mx-auto items-center font-bold overflow-hidden group border-2 border-gray-500 hover:text-white">
          <span className="relative z-10">Read More</span>
          <span className="absolute inset-0 bg-gray-800 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100 "></span>
        </button>
      </Link>
      <Heading>TECHNOLOGIES</Heading>
      <TechSection />
      <Industries />
      <Form />
      <Brands />

      <Testimonials />
    </div>
  );
}

export default HeroSection;

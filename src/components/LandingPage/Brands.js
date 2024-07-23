"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { logos } from "@/assets/clients";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1424 }, items: 4 },
  desktop: { breakpoint: { max: 1424, min: 1000 }, items: 3 },
  tablet: { breakpoint: { max: 1000, min: 740 }, items: 2 },
  mobile: { breakpoint: { max: 740, min: 0 }, items: 1 },
};

const Brands = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % logos.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (step) => {
    setCurrentSlide(
      (prevSlide) => (prevSlide + step + logos.length) % logos.length
    );
  };

  return (
    <div className="w-full text-black">
      <h3 className="text-center font-bold text-lg sm:text-2xl">
        VALUABLE CLIENTS
      </h3>
      <div className="max-w-screen-2xl mx-auto">
        <Carousel
          autoPlay={true}
          responsive={responsive}
          infinite={true}
          containerClass="carousel-container"
          arrows={false}
        >
          {logos.map((brand, index) => (
            <div
              key={index}
              className="max-w-xs overflow-hidden flex justify-center items-center mx-auto mt-10"
            >
              <div className="flex items-center justify-center bg-white shadow-inner rounded-full p-8 mx-4 shadow-black  ">
                <Image
                  src={brand}
                  alt={`Brand ${index}`}
                  width={200}
                  height={200}
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full"
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Brands;

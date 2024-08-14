"use client";
import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FcShop } from "react-icons/fc";
import { GiHealthDecrease } from "react-icons/gi";
import { MdLocalPharmacy } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { FcAutomotive } from "react-icons/fc";
import { BsBank } from "react-icons/bs";
import { FaBuilding, FaPlane, FaFilm, FaRegHospital } from "react-icons/fa";

const INDUSTRIES = [
  { Icon: FcAutomotive, name: "Automotive", color: "#DC3545" },
  { Icon: FaPlane, name: "Aviation", color: "#17A2B8" },
  { Icon: BsBank, name: "Bank", color: "#00CCC7" },
  { Icon: FcShop, name: "E-Commerce", color: "#001F3F" },
  { Icon: FaFilm, name: "Entertainment", color: "#DC3545" },
  { Icon: GiHealthDecrease, name: "Healthcare", color: "#007BFF" },
  { Icon: FaRegHospital, name: "Medical", color: "#6F42C1" },
  { Icon: MdLocalPharmacy, name: "Pharma", color: "#28A745" },
  { Icon: FaBuilding, name: "Real Estate", color: "#FFC107" },
  { Icon: GrTechnology, name: "Technology", color: "#20C997" },
];

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1424 }, items: 7 },
  desktop: { breakpoint: { max: 1424, min: 1000 }, items: 3 },
  tablet: { breakpoint: { max: 1000, min: 740 }, items: 2 },
  mobile: { breakpoint: { max: 740, min: 0 }, items: 1 },
};

const Industries = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % INDUSTRIES.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (step) => {
    setCurrentSlide(
      (prevSlide) => (prevSlide + step + INDUSTRIES.length) % INDUSTRIES.length
    );
  };

  return (
    <div className="w-full text-black">
      <h2 className="font-bold text-3xl text-black mb-3 manrope mt-20 text-center">
        Industries We Serve
      </h2>

      <p className=" font-medium text-lg sm:text-xl pb-5 text-center ">
        We make happy clients by interconnecting technology with business & art.
      </p>

      <div className="max-w-screen-2xl mx-auto px-5 ">
        <Carousel
          autoPlay={true}
          responsive={responsive}
          infinite={true}
          containerClass="carousel-container"
        >
          {INDUSTRIES.map((industry, index) => (
            <div
              key={index}
              className="max-w-xs overflow-hidden justify-center items-center mx-auto"
            >
              <div
                className="flex items-center justify-center "
                style={{ color: industry.color }}
              >
                <industry.Icon className="w-28 h-28 " />
              </div>
              <p className="justify-center text-center manrope font-bold text-lg">
                {industry.name}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Industries;

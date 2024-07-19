"use client";
import React, { useState } from "react";
import Image from "next/image";

const ServiceCard = ({ image, title, content, isHovered }) => {
  return (
    <div className="relative max-w-xs overflow-hidden justify-center items-center mx-auto manrope card-container">
      <div className="flex items-center justify-center bg-white">
        <Image src={image} alt={`Service`} className="w-52 h-52" />
        <div
          className={`absolute top-0 left-0 w-auto h-full ${
            isHovered ? "card-content-hover" : "card-content"
          } grid grid-cols-1 gap-1 transition-opacity duration-300 items-center justify-center bg-teal-800 text-white shadow-inner rounded-md mx-auto cursor-pointer shadow-black px-4 py-6`}
        >
          <h3 className="text-center font-bold text-2xl">{title}</h3>
          <p className="text-center text-base">{content}</p>
        </div>
      </div>
    </div>
  );
};

function ServiceSection({ services }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-center mx-2 px-2 sm:mx-auto">
      {services.map((service, index) => (
        <div
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <ServiceCard
            image={service.image}
            content={service.content}
            title={service.title}
            isHovered={hoveredIndex === index}
          />
        </div>
      ))}
    </div>
  );
}

export default ServiceSection;

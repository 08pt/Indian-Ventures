"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const ServiceCard = ({ image, title, content, isHovered }) => {
  return (
    <div className="relative max-w-xs overflow-hidden justify-center items-center mx-auto manrope card-container service-card">
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
  const [isAnimated, setIsAnimated] = useState(false);
  const sectionRef = useRef(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAnimated(true);
          observer.disconnect(); // Stop observing after animation is triggered
        }
      },
      {
        threshold: 0.1, // Adjust based on when you want to trigger the animation
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-center mx-2 px-2 sm:mx-auto service-section ${
        isAnimated ? "animate" : ""
      }`}
    >
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

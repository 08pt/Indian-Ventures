"use client";
import React, { useState } from "react";
import Link from "next/link";
import { BsList } from "react-icons/bs";

const Navlinks = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="flex items-center justify-between px-6 manrope">
      <div className="flex items-center xl:space-x-8 space-x-4 max-md:hidden">
        <Link
          href="/"
          className="text-mblack text-lg font-semibold hover:text-gray-500 link-stroke"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-mblack text-lg font-semibold hover:text-gray-500 link-stroke"
        >
          About us
        </Link>
        <Link
          href="/technology"
          className="text-mblack text-lg font-semibold hover:text-gray-500 link-stroke"
        >
          Technologies
        </Link>
        <Link
          href="/services"
          className="text-mblack text-lg font-semibold hover:text-gray-500 link-stroke"
        >
          Services
        </Link>
        <Link
          href="/contact"
          className="text-mblack text-lg font-semibold hover:text-gray-500 link-stroke"
        >
          Contact us
        </Link>
      </div>
      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        <BsList className="h-8 w-8 text-mblack" />
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 right-0 w-[70%] sm:w-1/3 h-80 bg-white z-50 flex flex-col px-4 py-4 pt-6">
          <Link
            href="/"
            onClick={closeMenu}
            className="text-mblack text-lg font-semibold mb-4 hover:text-gray-500 link-fill"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={closeMenu}
            className="text-mblack text-lg font-semibold mb-4 hover:text-gray-500 link-fill"
          >
            About us
          </Link>
          <Link
            href="/technology"
            onClick={closeMenu}
            className="text-mblack text-lg font-semibold mb-4 hover:text-gray-500 link-fill"
          >
            Technologies
          </Link>
          <Link
            href="/services"
            onClick={closeMenu}
            className="text-mblack text-lg font-semibold mb-4 hover:text-gray-500 link-fill"
          >
            Services
          </Link>
          <Link
            href="/contact"
            onClick={closeMenu}
            className="text-mblack text-lg font-semibold hover:text-gray-500 link-fill"
          >
            Contact us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navlinks;

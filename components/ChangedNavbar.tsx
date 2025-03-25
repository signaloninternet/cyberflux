"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import CustomCursor from "./Cursor";
import { Menu, X } from "lucide-react";

const ChangedNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={` md:px-16 top-0 bg-white relative text-black fixed w-full z-30 transition-all duration-300 ${
        scrolled ? "py-2 shadow-lg" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <div className="lg:hidden absolute top-[90vh] right-8 rounded-full p-2 bg-black z-50 transition-all duration-300 hover:bg-gray-800 shadow-lg">
          <button
            className="flex justify-center items-center w-10 h-10 focus:outline-none transition-transform duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-8 h-8 text-white transition-transform duration-300 hover:rotate-90" />
            ) : (
              <Menu className="w-8 h-8 text-white transition-transform duration-300 hover:scale-110" />
            )}
          </button>
        </div>
        <ul className="hidden lg:flex space-x-6 uppercase text-sm">
          <li>
            <Link
              href="/"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              About
            </Link>
          </li>
        </ul>

        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 z-10">
          <Link href="/">
            <div className="relative w-[300px] h-[50px] flex items-center justify-center">
              <Image
                src="/pinklogo.png"
                alt="Logo"
                fill
                priority
                className="object-contain"
                sizes="200px, 160px"
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Links - Right Side */}
        <ul className="hidden lg:flex space-x-6 uppercase text-sm">
          <li>
            <Link
              href="/contact"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Projects
            </Link>
          </li>
        </ul>

        {/* Empty div for spacing on mobile */}
        <div className="lg:hidden"></div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black text-white bg-opacity-95 z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col items-center space-y-8 text-2xl uppercase">
          <li className="transform hover:scale-110 transition-transform duration-300">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li className="transform hover:scale-110 transition-transform duration-300">
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              About
            </Link>
          </li>
          <li className="transform hover:scale-110 transition-transform duration-300">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Contact
            </Link>
          </li>
          <li className="transform hover:scale-110 transition-transform duration-300">
            <Link
              href="/projects"
              onClick={() => setIsOpen(false)}
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default ChangedNavbar;

"use client";

import Image from "next/image";
import Link from "next/link";
import { Twitter, Instagram, Facebook, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-16 lg:px-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Side - Logo and Social Icons */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          {/* Replace with your image */}
          <Image
            src="/footer1.svg"
            alt="Logo"
            width={200}
            height={100}
            priority
          />

          {/* Social Icons */}
          <div className="flex space-x-4">
            <Link
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-600 transition-all"
            >
              <Twitter className="w-5 h-5 text-white" />
            </Link>
            <Link
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-600 transition-all"
            >
              <Instagram className="w-5 h-5 text-white" />
            </Link>
            <Link
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-600 transition-all"
            >
              <Facebook className="w-5 h-5 text-white" />
            </Link>
            <Link
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-600 transition-all"
            >
              <Github className="w-5 h-5 text-white" />
            </Link>
          </div>
        </div>

        {/* Right Side - Links */}
        <div className="flex flex-wrap justify-center md:justify-end space-x-16 mt-6 md:mt-0">
          {/* Left Column */}
          <div>
            <h4 className="text-lg font-semibold text-white">Links</h4>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column */}
          <div>
            <h4 className="text-lg font-semibold text-white">Features</h4>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Large Logo Below (Optional) */}
      <div className="flex justify-center mt-10">
        {/* Replace with your image */}
        <Image
          src="/footer2.svg"
          alt="Large Logo"
          width={350}
          height={180}
          priority
        />
      </div>
    </footer>
  );
};

export default Footer;

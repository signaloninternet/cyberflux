"use client";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface CompanyShowcaseProps {
  videoLink: string;
  companyName: string;
  yearIncorporated: string;
  headline: string;
  description: string;
  shortDescription: string;
  projectLink?: string; // ✅ Use string type for URL
}

const CompanyShowcase: React.FC<CompanyShowcaseProps> = ({
  videoLink,
  companyName,
  yearIncorporated,
  headline,
  description,
  shortDescription,
  projectLink,
}) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start max-w-6xl lg:max-w-[2100px] mx-auto p-6  gap-10">
      <div className="w-full lg:w-[60%]">
        <div className="relative w-full">
          <video
            src={videoLink}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto lg:h-[90%] object-cover rounded-lg"
          />
        </div>

        <div className="flex justify-between text-sm text-gray-400 mt-3">
          <span className="font-bold">© {yearIncorporated}</span>
          <span className="uppercase font-bold">{companyName}</span>
        </div>
      </div>
      <div className="w-full lg:w-[40%] md:h-96 xl:mt-6 flex gap-4 md:gap-6 flex-col justify-between">
        <div className="flex flex-col gap-4 md:gap-6">
          <h2 className="text-lg lg:text-2xl 2xl:text-3xl font-manrope font-bold uppercase text-white">
            {headline}
          </h2>
          <p className="text-sm  font-manrope lg:text-md 2xl:text-lg leading-relaxed text-gray-400">
            {description}
          </p>
        </div>
        <div className="flex flex-col gap-4 md:gap-6">
          <p className="text-sm  font-manrope lg:text-md 2xl:text-lg leading-relaxed text-[#00E0FF]">
            {shortDescription}
          </p>

          {projectLink && (
            <Link
              href={projectLink}
              className="group flex hover:bg-[#00e0ff] items-center justify-between w-[250px] h-[50px] border-2 border-[#00E0FF] rounded-full p-2 transition-all duration-300"
            >
              <span className="text-[#00E0FF] pl-2 group-hover:text-black text-sm font-semibold tracking-wide">
                ENTER YOUR EMAIL
              </span>
              <div className="w-8 h-8 flex items-center justify-center bg-[#00E0FF] rounded-full transition-colors duration-300 group-hover:bg-black">
                <ArrowUpRight className="w-5 h-5 text-black group-hover:text-[#00E0FF]" />
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompanyShowcase;

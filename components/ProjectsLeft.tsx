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
    <div className="flex flex-col lg:flex-row justify-between items-start max-w-6xl xxl:max-w-7xl mx-auto p-5 gap-10">

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

        <div className="flex justify-between text-sm text-gray-600 mt-3">
          <span className="font-bold">© {yearIncorporated}</span>
          <span className="uppercase font-bold">{companyName}</span>
        </div>
      </div>
      <div className="w-full lg:w-[40%] flex flex-col gap-5">
        <h2 className="text-2xl font-bold uppercase text-gray-800">
          {headline}
        </h2>
        <p className="text-base leading-relaxed text-gray-600">{description}</p>
        <p className="text-sm leading-relaxed text-pink-600">
          {shortDescription}
        </p>

        {projectLink && (
          <Link 
            href={projectLink} 
            className="group max-w-[177px] flex items-center gap-1.5 bg-white hover:bg-[#FF0066] text-[#FF0066] hover:text-white text-sm font-medium py-1 px-2.5 rounded-full transition-all duration-300 border border-[#FF0066]"
          >
            <span>LINK TO PROJECT</span>
            <div className="bg-[#FF0066] group-hover:bg-white rounded-full p-1.5 transition-colors duration-300">
              <ArrowUpRight className="w-3.5 h-3.5 text-white group-hover:text-[#FF0066]" />
            </div>
          </Link>
        )}
      </div>

    </div>
  );
};

export default CompanyShowcase;

import React, { useState } from 'react';
import { Circle, ArrowUpRight } from 'lucide-react';
import ProjectCard from './ProjectCard';

// Sample project data
const projects = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: "2022",
    agency: "CYBERFLUX",
    title: "Tote Bag Design",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: "2022",
    agency: "CYBERFLUX",
    title: "Howzie",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/326502/pexels-photo-326502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    year: "2022",
    agency: "CYBERFLUX",
    title: "Neurasim",
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    year: "2022",
    agency: "CYBERFLUX",
    title: "Designure",
  },
];

const ProjectShowcase: React.FC = () => {
  const [isAnyHovered, setIsAnyHovered] = useState(false);

  const handleHover = (isHovered: boolean) => {
    setIsAnyHovered(isHovered);
  };

  return (
    <section className="relative bg-black text-white py-16 overflow-hidden">
      {/* Header section */}
      <div className="px-8 mb-16">
        <div className="mb-16 mt-8 flex flex-col md:flex-row justify-between">
          <div className="flex items-start gap-4 flex-col">
            <div className="flex items-center space-x-2">
              <Circle className="w-3 h-3 text-[#FF073A]" fill="currentColor" />
              <h1 className="text-sm md:text-md 2xl:text-lg  tracking-[0.2em] uppercase">
                Our Projects
              </h1>
            </div>
            <h2 className="text-4xl md:text-5xl 2xl:text-6xl font-bold tracking-tight">
              Projects
            </h2>
            <a
              href="#"
              className="group flex hover:bg-[#00e0ff] items-center justify-between w-[170px] h-[50px] md:w-[200px] md:h-[50px] border-2 border-[#00E0FF] rounded-full p-2 mt-2 transition-all duration-300"
            >
              <span className="text-[#00E0FF] pl-2 group-hover:text-black text-sm font-semibold tracking-wide">
                ALL PROJECTS
              </span>
              <div className="w-8 h-8 flex items-center justify-center bg-[#00E0FF] rounded-full transition-colors duration-300 group-hover:bg-black">
                <ArrowUpRight className="w-5 h-5 text-black group-hover:text-[#00E0FF]" />
              </div>
            </a>
          </div>
          <div className="w-full md:pl-8 md:w-1/2 mt-4 md:mt-0">
            <p className=" text-md  font-manrope lg:text-lg 2xl:text-xl leading-relaxed">
              With a strong focus on innovation and user-centric design, we are
              dedicated to transforming industries, streamlining workflows, and
              delivering impactful digital products that redefine user
              experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="px-8 grid grid-cols-1 md:grid-cols-4 gap-6 md:flex md:gap-6">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            isAnyHovered={isAnyHovered}
            onHover={handleHover}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;
"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Circle } from "lucide-react";
import Link from "next/link";

// Sample project data with images that match the screenshot
const projects = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1654707632949-b01c786ac73f?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: "2022",
    agency: "DESIGNURE",
    title: "Tote Bag Design",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1677890465835-ab8c5c621771?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: "2022",
    agency: "DESIGNURE",
    title: "Creative Vision",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1575426553509-3c6953fdf9b6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: "2022",
    agency: "DESIGNURE",
    title: "Project Three",
  },
  {
    id: 4,
    image:
      "https://plus.unsplash.com/premium_photo-1681415164668-1b756bc4c9eb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: "2022",
    agency: "DESIGNURE",
    title: "Project Four",
  },
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1654707632949-b01c786ac73f?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: "2022",
    agency: "DESIGNURE",
    title: "Tote Bag Design",
  },
  {
    id: 2,
    image:
      "https://plus.unsplash.com/premium_photo-1681415164668-1b756bc4c9eb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: "2022",
    agency: "DESIGNURE",
    title: "Creative Vision",
  },
  {
    id: 3,
    image:
      "https://plus.unsplash.com/premium_photo-1681415164668-1b756bc4c9eb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: "2022",
    agency: "DESIGNURE",
    title: "Project Three",
  },
  {
    id: 4,
    image:
      "https://plus.unsplash.com/premium_photo-1681415164668-1b756bc4c9eb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: "2022",
    agency: "DESIGNURE",
    title: "Project Four",
  },
];

const ProjectShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Transform scrollYProgress to horizontal scroll position
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollWidth]);

  // Calculate container dimensions on mount and resize
  useEffect(() => {
    const calculateDimensions = () => {
      if (containerRef.current) {
        const totalWidth = projects.length * 520; // card width (500) + gap (20)
        const viewportWidth = window.innerWidth;
        setContainerWidth(totalWidth);
        // Only scroll the amount that overflows the viewport
        setScrollWidth(Math.max(0, totalWidth - viewportWidth + 32)); // +32 for padding
      }
    };

    calculateDimensions();
    window.addEventListener("resize", calculateDimensions);

    return () => {
      window.removeEventListener("resize", calculateDimensions);
    };
  }, []);

  return (
    <section className="relative  bg-black text-white py-16 overflow-hidden">
      {/* Header section */}
      <div className="px-8 mb-16 ">
        <div className="mb-16 mt-8 flex flex-col md:flex-row justify-between">
          <div className="flex items-start gap-4 flex-col">
            <div className="flex items-center space-x-2 mb-2">
              <Circle className="w-3 h-3 text-[#FF073A]" fill="currentColor" />
              <h1 className="text-sm tracking-[0.2em] uppercase ">
                Our Projects
              </h1>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold  tracking-tight">
              Projects
            </h2>
            <Link
            href="/projects"
            className="group flex hover:bg-[#00e0ff] items-center justify-between w-[200px] h-[50px] border-2 border-[#00E0FF] rounded-full p-2 mt-2 transition-all duration-300"
          >
            <span className="text-[#00E0FF] pl-2 group-hover:text-black text-sm font-semibold tracking-wide">
              ALL PROJECTS
            </span>
            <div className="w-8 h-8 flex items-center justify-center bg-[#00E0FF] rounded-full transition-colors duration-300 group-hover:bg-black">
              <ArrowUpRight className="w-5 h-5 text-black group-hover:text-[#00E0FF]" />
            </div>
          </Link>
          </div>
          <div className="w-full md:w-1/2 mt-4 md:mt-0">
            <p className="text-sm tracking-[0.2em] uppercase">
              With a strong focus on innovation and user-centric design, we are
              dedicated to transforming industries, streamlining workflows, and
              delivering impactful digital products that redefine user
              experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Gradient edges for fade effect */}
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

      {/* Scroll Container */}
      <div ref={containerRef} className="relative h-[400px] overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-6 px-6 md:px-16 absolute top-0 left-0 h-full"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id + "-" + index}
              className="relative min-w-[500px] h-[280px] cursor-pointer z-10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.5 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="w-full h-full rounded-xl z-50 overflow-hidden"
                style={{ originX: 0.5, originY: 0.5 }}
              >
                <Link href="/projects" className="block w-full h-full">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${project.image})`,
                    }}
                  />
                </Link>
              </motion.div>

              {/* Metadata */}
              <div className="absolute bottom-2 left-2 text-white text-[10px]">
                © {project.year}.
              </div>
              <div className="absolute bottom-2 right-2 text-white text-[10px]">
                {project.agency}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectShowcase;

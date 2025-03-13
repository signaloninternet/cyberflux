"use client";

import { ArrowUpRight, Circle } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "デジタル体験デザイン",
    titleEn: "Digital Experience Design",
    description:
      "With a strong focus on innovation and user-centric design, we are dedicated to transforming industries, streamlining workflows, and delivering impactful digital products that redefine user experience.",
    image:
      "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1000&auto=format&fit=crop",
    link: "/projects/digital-experience",
    category: "デザイン",
  },
  {
    id: 2,
    title: "ブランドアイデンティティ",
    titleEn: "Brand Identity",
    description:
      "Creating memorable brand experiences through thoughtful design and strategic thinking.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1000&auto=format&fit=crop",
    link: "/projects/brand-identity",
    category: "ブランド",
  },
  {
    id: 3,
    title: "デジタルイノベーション",
    titleEn: "Digital Innovation",
    description:
      "Pushing the boundaries of digital technology to create innovative solutions.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
    link: "/projects/innovation",
    category: "テクノロジー",
  },
];

export default function Project() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="min-h-screen bg-[#f7f7f7] dark:bg-[#1a1a1a] overflow-hidden p-4">
      <div className="max-w-[1400px] mx-auto">
        {/* Japanese-style Header */}
        <div className="mb-16 mt-8 flex flex-row justify-between">
          <div className="flex items-start gap-4 flex-col">
            <div className="flex items-center space-x-2 mb-2">
              <Circle className="w-3 h-3 text-[#FF073A]" fill="currentColor" />
              <h1 className="text-sm tracking-[0.2em] uppercase text-black">
                プロジェクト
              </h1>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight">
              Projects
            </h2>
            <button className="group flex items-center gap-1.5 bg-white hover:bg-[#FF0066] text-[#FF0066] hover:text-white text-sm font-medium py-1 px-2.5 rounded-full transition-all duration-300 border border-[#FF0066]">
              <span>ALL PROJECTS</span>
              <div className="bg-[#FF0066] group-hover:bg-white rounded-full p-1.5 transition-colors duration-300">
                <ArrowUpRight className="w-3.5 h-3.5 text-white group-hover:text-[#FF0066]" />
              </div>
            </button>
          </div>
          <div className="w-1/2">
            <p className="text-sm tracking-[0.2em] uppercase text-black">
              With a strong focus on innovation and user-centric design, we are
              dedicated to transforming industries, streamlining workflows, and
              delivering impactful digital products that redefine user
              experiences.
            </p>
          </div>
        </div>

        {/* Kanban Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              href={project.link}
              key={project.id}
              className="group relative"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div
                className={`
                  relative bg-cover bg-center bg-no-repeat rounded-lg
                  transform transition-all duration-500 pt-16 pr-6 pl-6 pb-6
                  ${activeProject === project.id ? "scale-[1.02]" : "scale-100"}
                  hover:z-10 text-white
                `}
                style={{ backgroundImage: `url(${project.image})` }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 rounded-lg" />

                {/* Category Tag */}
                <div className="relative z-10 mb-2">
                  <div className="inline-block bg-red-50 dark:bg-red-900/20 px-3 py-1 rounded-full border border-red-100 dark:border-red-800">
                    <span className="text-xs text-red-600 dark:text-red-400">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-sm font-medium tracking-wider">
                    {project.title}
                  </h3>
                  <h2 className="text-xl font-bold tracking-tight group-hover:text-red-300 transition-colors duration-300">
                    {project.titleEn}
                  </h2>
                  <p className="text-sm leading-relaxed mt-2">
                    {project.description}
                  </p>
                </div>

                {/* Interactive Arrow */}
                <div
                  className={`
                  absolute bottom-3 right-3 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center
                  transform transition-all duration-500
                  ${
                    activeProject === project.id
                      ? "scale-100 opacity-100"
                      : "scale-50 opacity-0"
                  }
                `}
                >
                  <ArrowUpRight className="w-6 h-6 text-white" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Interactive Background Element */}
        <div
          className="fixed inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 0, 0, 0.03), transparent 80%)`,
          }}
        />
      </div>
    </main>
  );
}

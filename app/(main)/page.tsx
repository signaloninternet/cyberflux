"use client";

import CreativeTeam from "@/components/CreativeTeam";
import Crosshair from "@/components/Crosshair";
import CustomCursor from "@/components/Cursor";
import Footer from "@/components/Footer";
import ScrollVelocity from "@/components/LetsTalk";
import Navbar from "@/components/Navbar";
import OurGoal from "@/components/OurGoal";
import Project from "@/components/Projects";
import MeteorShower from "@/components/Shower";
import SplashCursor from "@/components/SplashCursor";
import ShootingStars from "@/components/Stars";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useRef } from "react";
import AnimatedCursor from "react-animated-cursor";

export default function Home() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerRef = useRef(null);
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <div
        className="absolute top-[0vh] md:-top-[40vh] left-1/2 -translate-x-1/2 w-[1000px] md:w-[2000px] h-[800px] md:h-[1000px] lg:h-[1600px] z-0"
        style={{
          background: `
            radial-gradient(
              circle at 50% 100%,
              #00ffff 0%,
              rgba(0, 255, 255, 0.3) 25%,
              rgba(0, 255, 255, 0.1) 45%,
              transparent 65%
            )
          `,
          opacity: 0.6,
        }}
      />

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-50 text-[#00ffff] font-bold text-xl"
      >
        <Navbar />
      </motion.div>

      <section className="relative z-10 h-[100vh] max-h-[1000px] flex flex-col justify-center items-center text-center px-4">
        <MeteorShower />

        <motion.div style={{ opacity }} className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-white/60"
          >
            INNOVATING DIGITAL BRANDS TO THE FUTURE
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-2"
          >
            WE ARE A
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-2 text-[#00ffff]"
          >
            CREATIVE TECH
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-[#00ffff]"
          >
            AGENCY
          </motion.div>
        </motion.div>
      </section>
      <CreativeTeam />
      <Project />
      <OurGoal />
      <ScrollVelocity
        texts={[
          ["LET'S TALK", "Get In Touch"],
          ["LET'S TALK", "Get In Touch"],
        ]}
      />
      <Footer />
    </main>
  );
}

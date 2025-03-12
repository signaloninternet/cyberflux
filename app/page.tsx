"use client";

import Navbar from "@/components/Navbar";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const ShootingStar = ({ delay = 0 }) => (
  <motion.div
    initial={{ x: "-100%", y: "0%", opacity: 0 }}
    animate={{ x: "200%", y: "100%", opacity: [0, 1, 1, 0] }}
    transition={{
      duration: 2,
      delay,
      repeat: Infinity,
      repeatDelay: Math.random() * 5 + 3,
      ease: "linear",
    }}
    className="absolute h-[1px] w-[100px] bg-gradient-to-r from-transparent via-[#00ffff] to-transparent"
  />
);

export default function Home() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Half-circle gradient at bottom */}
      <div 
        className="absolute top-[0vh] left-1/2 -translate-x-1/2 w-[1000px] h-[800px] z-0"
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
          opacity: 0.6
        }}
      />

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-[#00ffff] font-bold text-xl"
      >
        <Navbar />
      </motion.div>

      <section className="relative z-10 h-screen flex flex-col justify-center items-center text-center px-4">
        {mounted &&
          Array.from({ length: 10 }).map((_, i) => (
            <ShootingStar key={i} delay={i * 0.5} />
          ))}

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

        {/* Animated Background Lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              rotate: ["-45deg", "-44deg", "-45deg"],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-0 bottom-0 w-[200%] h-[200%] origin-bottom-left"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0.1 }}
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{
                  duration: 2,
                  delay: i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-0 top-[75%] w-full h-[1px] bg-[#00ffff]/20"
                style={{ top: `${75 + i * 2}%` }}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative px-4 md:px-16 py-20 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-xl font-bold">
                WE'RE A CREATIVE AND
                <br />
                TALENTED TEAM OF DESIGNERS
              </h2>
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronRight className="text-[#00ffff]" size={24} />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-white/80 leading-relaxed"
            >
              At CyberFlux Enterprises, we build digital solutions that
              empower businesses, creators, and brands across multiple
              industries. Our expertise lies in developing cutting-edge
              websites, applications, fashion-tech solutions, and interactive
              experiences that seamlessly blend technology with creativity.
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
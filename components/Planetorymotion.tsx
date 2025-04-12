"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function PlanetaryHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative max-w-[2100px] mx-auto w-full min-h-screen overflow-hidden bg-black flex items-center">
      {/* Content Section */}
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 lg:px-8 py-12 relative z-10">
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-white text-xl md:text-2xl font-medium tracking-wide">
            JOIN US IN SHAPING THE FUTURE
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-xl">
            At Cyberflux, we are committed to driving digital innovation across
            multiple industries. Whether you&apos;re a business, creator,
            entrepreneur, or investor, we invite you to explore collaboration
            opportunities and be part of our mission to build groundbreaking
            digital solutions.
          </p>
          <div>
            <motion.button
              className="flex items-center space-x-2 bg-transparent border border-[#00E0FF] text-[#00E0FF] px-6 py-3 rounded-full group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-medium">LET&apos;S TALK</span>
              <motion.div
                className="bg-[#00E0FF] rounded-full p-1"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
              >
                <ArrowRight className="h-4 w-4 text-black" />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Planetary System */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-full h-full pointer-events-none">
        <PlanetarySystem />
      </div>
    </div>
  );
}

function PlanetarySystem() {
  return (
    <div className="relative w-full h-full">
      {/* Central Planet */}
      <motion.div
        className="absolute right-[-100px] md:right-[-50px] top-24 transform -translate-y-1/2"
        animate={{
          rotate: 360,
        }}
        transition={{
          rotate: {
            duration: 100,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          },
          boxShadow: {
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
        }}
      >
        <div className="w-[200px] h-[200px] md:w-[500px] md:h-[500px]">
          <img
            src="/planet-02.svg"
            alt="Central Planet"
            className="w-full h-full md:w-[500px] md:h-[500px] object-cover rounded-full"
          />

        </div>
      </motion.div>

      {/* Orbit 1 */}
      <div className="absolute right-[-100px] md:right-[-50px] top-1/2 transform -translate-y-1/2">
        <div className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full border border-[#00E0FF]/30 relative">
          <motion.div
            className="absolute"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{ width: "100%", height: "100%" }}
          >
            <motion.div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              whileHover={{ scale: 1.2 }}
            >
              <div className="w-[30px] h-[30px] rounded-full bg-[#00E0FF] shadow-[0_0_15px_#00E0FF]"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Orbit 2 */}
      <div className="absolute right-[-100px] md:right-[-50px] top-1/2 transform -translate-y-1/2">
        <div className="w-[500px] h-[500px] md:w-[650px] md:h-[650px] rounded-full border border-[#00E0FF]/20 relative">
          <motion.div
            className="absolute"
            initial={{ rotate: 0 }}
            animate={{ rotate: -360 }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{ width: "100%", height: "100%" }}
          >
            <motion.div
              className="absolute top-1/4 left-0 transform -translate-x-1/2"
              whileHover={{ scale: 1.2 }}
            >
              <div className="w-[40px] h-[40px] rounded-full bg-[#00E0FF] shadow-[0_0_15px_#00E0FF]"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Orbit 3 */}
      <div className="absolute right-[-100px] md:right-[-50px] top-1/2 transform -translate-y-1/2">
        <div className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full border border-[#00E0FF]/10 relative">
          <motion.div
            className="absolute"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 35,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{ width: "100%", height: "100%" }}
          >
            <motion.div
              className="absolute bottom-1/4 left-0 transform -translate-x-1/2"
              whileHover={{ scale: 1.2 }}
            >
              <div className="w-[50px] h-[50px] rounded-full bg-[#00E0FF] shadow-[0_0_15px_#00E0FF]"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

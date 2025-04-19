import React from "react";
import Crosshair from "@/components/Crosshair";
import CustomCursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import MeteorShower from "@/components/Shower";
import SplashCursor from "@/components/SplashCursor";
import ShootingStars from "@/components/Stars";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useRef } from "react";
import AnimatedCursor from "react-animated-cursor";
import Threads from "./Threads";

const CreativeTeam = () => {
    return (
      <>
        <section className="relative flex flex-col items-center justify-center px-6 py-20 bg-black overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Threads amplitude={1.9} distance={0.9} enableMouseInteraction={true} />
          </div>

          <div className="relative z-10 max-w-[2000px]">
            <div className="grid md:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h2 className="text-lg lg:text-2xl 2xl:text-3xl font-manrope font-bold">
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
                className="text-white/80 text-md  font-manrope lg:text-lg 2xl:text-xl leading-relaxed"
              >
                At CyberFlux Enterprises, we build digital solutions that empower
                businesses, creators, and brands across multiple industries. Our
                expertise lies in developing cutting-edge websites, applications,
                fashion-tech solutions, and interactive experiences that
                seamlessly blend technology with creativity.
              </motion.div>
            </div>
          </div>
        </section>
      </>
    );
  };
  

export default CreativeTeam;

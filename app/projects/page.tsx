"use client";

import ChangedNavbar from "@/components/ChangedNavbar";
import CompanyShowcase from "@/components/ProjectsLeft";
import React from "react";
import { motion } from "framer-motion";
import CompanyRight from "@/components/ProjectsRight";
import ScrollVelocity from "@/components/LetsTalk";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Page = () => {
  const showcaseVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="relative bg-black  max-w-[2100px] mx-auto">
      <div className="fixed top-0 left-0 w-full z-30">
        <Navbar />
      </div>

      <div className="pt-[80px] space-y-16">
        <motion.div
          variants={showcaseVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <CompanyShowcase
            videoLink="/video3.mp4"
            companyName="DESIGNURE"
            yearIncorporated="2022"
            headline="Neurasim - THE DIGITAL FACTORY FOR FASHION"
            description="Neurasim is a fashion-tech platform that allows designers and entrepreneurs to digitally create, manufacture, and brand their clothing collections with ease. Unlike traditional fashion design tools, Designure integrates end-to-end production management into one seamless platform."
            shortDescription="Interested in the project? Consider investing in the project we would love to have you onboard! Drop your email to join."
            projectLink="https://www.neurasim.health/"
          />
        </motion.div>

        <motion.div
          variants={showcaseVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <CompanyRight
            videoLink="/video2.mp4"
            companyName="DESIGNURE"
            yearIncorporated="2022"
            headline="DESIGNURE - THE DIGITAL FACTORY FOR FASHION"
            description="Designure is a fashion-tech platform that allows designers and entrepreneurs to digitally create, manufacture, and brand their clothing collections with ease. Unlike traditional fashion design tools, Designure integrates end-to-end production management into one seamless platform."
            shortDescription="Interested in the project? Consider investing in the project we would love to have you onboard! Drop your email to join."
            projectLink="https://www.designure.in/"
          />
        </motion.div>

        <motion.div
          variants={showcaseVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <CompanyShowcase
            videoLink="/video1.mp4"
            companyName="DESIGNURE"
            yearIncorporated="2022"
            headline="DESIGNURE - THE DIGITAL FACTORY FOR FASHION"
            description="Designure is a fashion-tech platform that allows designers and entrepreneurs to digitally create, manufacture, and brand their clothing collections with ease. Unlike traditional fashion design tools, Designure integrates end-to-end production management into one seamless platform."
            shortDescription="Interested in the project? Consider investing in the project we would love to have you onboard! Drop your email to join."
            projectLink="#"
          />
        </motion.div>
      </div>
      <ScrollVelocity
        texts={[
          ["LET'S TALK", "Get In Touch"],
          ["LET'S TALK", "Get In Touch"],
        ]}
      />
      <Footer />
    </div>
  );
};

export default Page;

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const OurGoal = () => {
  const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const fadeIn = (
    direction: string,
    type: string,
    delay: number,
    duration: number
  ) => ({
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  });

  const planetVariants = (direction: string) => ({
    hidden: {
      x: direction === "left" ? "-100%" : "100%",
      rotate: 120,
      opacity: 0,
    },
    show: {
      x: 0,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.8,
        delay: 0.3,
      },
    },
  });

  const goalFeatures = [
    {
      title:
        "Creating accessible, end-to-end platforms that simplify complex workflows.",
    },
    {
      title:
        "Developing next-gen gaming experiences that push storytelling and immersion.",
    },
    {
      title:
        "Building innovative SaaS tools that enhance efficiency and productivity.",
    },
    {
      title:
        "Empowering businesses and entrepreneurs with cutting-edge technology.",
    },
  ];

  return (
    <section className="relative z-10 w-full min-h-screen px-8 py-12 md:py-16 lg:py-20">
      <div className="absolute inset-0 bg-black">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-cyan-500/20 to-transparent" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-col gap-10 md:gap-12 lg:gap-16 lg:flex-row relative z-10"
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.95] flex justify-center flex-col"
        >
          <h2 className="text-lg lg:text-2xl 2xl:text-3xl font-manrope font-bold tracking-widest text-white uppercase mb-4">
            OUR GOAL
          </h2>
          <p className="text-lg  font-manrope lg:text-xl 2xl:text-2xl text-gray-300 mb-8 md:mb-10 max-w-xl z-50">
            Our mission is to bridge the gap between creativity and technology
            by developing intuitive, scalable, and high-impact digital
            solutions.
          </p>
          <div className="mt-10 md:mt-12 lg:mt-16 flex flex-col space-y-6 md:space-y-8">
            {goalFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 md:gap-6">
                <div className="mt-1 w-6 h-6 md:w-8 md:h-8 relative">
                  <Image
                    src="/index.svg"
                    alt="Bullet point"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <p className="text-lg  font-manrope lg:text-xl 2xl:text-2xl text-white">
                  {feature.title}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={planetVariants("right")}
          className="flex-1 relative h-[300px] md:h-[400px] lg:h-[500px] xl:h-[700px]"
        >
          <div className="absolute right-0 top-0 md:right-20 md:top-20 w-16 h-16 md:w-20 md:h-20">
            <Image
              src="/goal1.svg"
              alt="Small planet"
              fill
              className="object-contain opacity-30 md:opacity-100"
            />
          </div>
          <div className="absolute left-0 bottom-24 md:left-auto md:right-10 w-48 h-48 md:w-64 md:h-64 xl:w-[600px] xl:h-[600px]">
            <Image
              src="/goal2.svg"
              alt="Large planet"
              fill
              className="object-contain opacity-30 md:opacity-100"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurGoal;

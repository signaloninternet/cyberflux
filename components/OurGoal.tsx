"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const OurGoal = () => {
  const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const fadeIn = (direction: string, type: string, delay: number, duration: number) => ({
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
  })

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
  })

  const goalFeatures = [
    {
      title: "Creating accessible, end-to-end platforms that simplify complex workflows.",
    },
    {
      title: "Developing next-gen gaming experiences that push storytelling and immersion.",
    },
    {
      title: "Building innovative SaaS tools that enhance efficiency and productivity.",
    },
    {
      title: "Empowering businesses and entrepreneurs with cutting-edge technology.",
    },
  ]

  return (
    <section className="relative z-10 w-full min-h-screen py-12 px-6 md:px-12">
      <div className="absolute inset-0 bg-black">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-cyan-500/20 to-transparent" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="max-w-7xl mx-auto flex lg:flex-row flex-col gap-8 relative z-10"
      >
        <motion.div variants={fadeIn("right", "tween", 0.2, 1)} className="flex-[0.95] flex justify-center flex-col">
          <h2 className="text-sm font-medium tracking-widest text-white uppercase mb-4">OUR GOAL</h2>
          <p className="text-lg text-gray-300 mb-10 max-w-xl">
            Our mission is to bridge the gap between creativity and technology by developing intuitive, scalable, and
            high-impact digital solutions.
          </p>
          <div className="mt-[48px] flex flex-col space-y-6">
            {goalFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 relative">
                  <Image src="/index.svg" alt="Bullet point" width={24} height={24} className="object-contain" />
                </div>
                <p className="text-white">{feature.title}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={planetVariants("right")} className="flex-1 relative h-[300px] md:h-auto">
          <div className="absolute md:right-20 md:top-20 right-0 top-0 w-16 h-16 md:w-20 md:h-20">
            <Image src="/goal1.svg" alt="Small planet" fill className="object-contain" />
          </div>
          <div className="absolute md:right-10 md:top-1/3 left-0 bottom-0 md:left-auto md:bottom-auto w-48 h-48 md:w-64 md:h-64">
            <Image src="/goal2.svg" alt="Large planet" fill className="object-contain" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default OurGoal


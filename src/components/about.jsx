'use client'

import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const stats = [
  { number: "30+", label: "Years of Experience" },
  { number: "60+", label: "Tube Bundle Dryers Delivered" },
  { number: "280 Tons", label: "Global Structural Fabrications" },
  { number: "95%+", label: "Pune's RMC Plants Powered" },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });
  const controls = useAnimation();

  // ✅ Move controls.start into useEffect
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, type: "spring", stiffness: 90 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, type: "spring", stiffness: 90 } },
    hover: { scale: 1.08, rotate: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.section
      ref={ref}
      className="bg-gradient-to-b from-black via-black to-cyan-800 max-w-full flex flex-col md:flex-row justify-center items-center gap-12 py-10 px-8 md:px-16 min-h-[75vh] overflow-hidden relative"
      variants={containerVariants}
      initial="hidden"
      animate={controls} // ✅ Controls safely updated in useEffect
    >
      {/* Left Content */}
      <motion.div
        className="flex-1 w-full md:w-2/3 flex flex-col justify-center space-y-6"
        variants={itemVariants}
      >
        <motion.h2
          className="text-3xl md:text-[2.4rem] font-bold tracking-widest font-orbitron text-white uppercase"
          variants={itemVariants}
        >
          ABOUT
        </motion.h2>
        <motion.p
          className="text-gray-300 text-base md:text-lg leading-relaxed max-w-[780px]"
          variants={itemVariants}
        >
          Quantum is a forward-thinking industrial process equipment manufacturer dedicated to delivering sustainable, high-performance solutions for chemical, distillery, pharmaceutical, food, sugar, and environmental industries. Backed by decades of expertise, we specialize in CO₂ recovery, water and wastewater treatment, and green technologies. Our customer-centric turnkey approach manages projects from concept to commissioning, enabling seamless transition to cleaner, more efficient operations.
        </motion.p>

        {/* Stats */}
        <div className="flex flex-wrap justify-start gap-6 mt-6">
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              className="flex-1 min-w-[180px] flex flex-col bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-2xl font-bold text-[#194569] mb-2">{item.number}</div>
              <div className="text-base text-gray-500 tracking-wide">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right Image */}
      <div
        className="flex-1 w-full flex justify-center items-center perspective-500 bg-fixed bg-cover bg-center"
      >
        <motion.img
          src="/images/cake.jpg"
          alt="About"
          className="h-full max-h-[70vh] w-[80vw] object-cover rounded-2xl shadow-2xl bg-fixed"
          variants={imageVariants}
        />
      </div>
    </motion.section>
  );
};

export default About;

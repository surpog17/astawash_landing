import React from "react";
import { motion } from "framer-motion";
import AboutUs from "./AboutUs";
import BellWhite from "./../../assets/PNG/astawash_bell_white.png";
const AboutMePage = () => {
  const containerVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
  };

  const textVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      id="AboutMe"
      className="min-h-screen"
      initial="initial"
      animate="animate"
      variants={containerVariants}
    >
      <div className="md:px-32 px-6 md:py-10 py-5">
        <div className="border-t-[2px] border-gray-200"></div>
        <div className="flex gap-2 font-poppins items-center">
          <span className="text-xs font-semibold mb-4 text-primary">01</span>
          <h1 className="md:text-md font-bold mb-4 text-primary">
            The outstanding company
          </h1>
        </div>
      </div>

      <div className="container p-8 lg:flex lg:items-start lg:justify-evenly">
        {/* Image section */}
        <motion.div className="lg:w-full lg:pl-8" variants={textVariants}>
          <AboutUs />
        </motion.div>
        <motion.div className="lg:w-96   mb-4 lg:mb-0" variants={imageVariants}>
          <div className="relative md:w-96 h-96 bg-[#cad5ff] flex justify-end items-start">
            <img className="relative left-44 top-14" src={BellWhite} />
            <div className="flex">
              <div className="h-14 w-20 bg-white"></div>
              <div className="h-24 w-24 bg-white"></div>
            </div>
          </div>

          <div className="w-full">
            <p className="font-poppins text-[#505A80] text-sm w-full flex justify-end">
              We work alongside our clients as one team with a shared ambition
              to achieve extraordinary results, outperform the competition and
              redefine industries. We merge the two approaches to find new,
              quick, and efficient ways to spot, validate and scale up new
              business opportunities.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutMePage;

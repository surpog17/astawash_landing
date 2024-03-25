import React from "react";
import { motion } from "framer-motion";
import ethioTel from "./../../assets/PNG/ethio_telecom.svg";
export default function Partners() {
  const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      id="Home"
      className="bg-[#e7eaf5] font-poppins md:px-24 px-6 py-10"
      initial="initial"
      animate="animate"
      variants={variants}
    >
      <div className="">
        <p className="text-lg font-light text-[#757575] text-center p-4">
          Partners
        </p>
        <div className="flex justify-between">
          <img src={ethioTel} className="md:w-44 w-28 filter grayscale" />
          <img src={ethioTel} className="md:w-44 w-28 filter grayscale" />
          <img src={ethioTel} className="md:w-44 w-28 filter grayscale" />
        </div>
      </div>
    </motion.div>
  );
}

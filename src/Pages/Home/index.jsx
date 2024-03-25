import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { BsArrowUpRightCircle } from "react-icons/bs";

import ios from "../../assets/PNG/main.png";
import android from "../../assets/PNG/android.png";
import ButtonWithIcon from "../../Components/Inputs/Button";

export default function HomePage() {
  const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      id="Home"
      className="flex items-center justify-center min-h-screen bg-primary font-libre    "
      initial="initial"
      animate="animate"
      variants={variants}
    >
      <div className=" flex flex-col-reverse lg:flex-row items-center   p-4 lg:w-3/4 gap-10">
        {/* Text on the left */}
        <motion.div
          className={`text-black lg:w-1/2 lg:pr-8 grid gap-5`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="py-4 text-white md:text-7xl text-4xl font-bold">
            <span className="">
              Empowering Tomorrow, <br />
              One Reminder at a Time.
            </span>
          </div>
          <p className="text-sm font-light text-white font-poppins">
            We help people remind there moments.
          </p>
          <ButtonWithIcon
            className="w-32 font-poppins bg-white hover:bg-primary border border-primary hover:border hover:border-white  rounded-full text-primary  hover:text-white   px-4 py-3  focus:outline-none transition duration-1000 ease-in-out"
            text="Explore"
            icon={<BsArrowUpRightCircle size={20} />}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center md:gap-10"
        >
          <img
            src={ios}
            alt="iphone"
            className="md:w-[50%]  md:h-full w-44 object-cover -rotate-[10deg] z-10"
          />
          <img
            src={android}
            alt="iphone"
            className="md:w-[50%] md:h-full w-44 object-cover md:rotate-[20deg] rotate-[10deg] "
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

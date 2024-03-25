import React from "react";
import { motion } from "framer-motion";
import Iphone from "../../assets/PNG/main.png";
import android from "../../assets/PNG/android.png";
import PlayStore from "../../assets/PNG/playstore.png";
import AppStore from "../../assets/PNG/appStore.png";

const Index = () => {
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
      id="Application"
      className="min-h-screen bg-[#eff0f5]"
      initial="initial"
      animate="animate"
      variants={containerVariants}
    >
      <div className="md:px-32 px-5 py-10">
        <div className="border-t-[2px] border-gray-200"></div>
        <div className="flex gap-2 font-poppins items-center">
          <span className="text-xs font-semibold mb-4 text-primary">02</span>
          <h1 className="text-md font-bold mb-4 text-primary">Apps</h1>
        </div>
      </div>
      <div className="md:px-32 px-6 py-5">
        <div className="flex gap-2 font-libre items-center w-96">
          <span className="font-semibold mb-4 text-[#071033] text-3xl">
            Through collaborations and partnerships, we produce best solutions.
          </span>
        </div>
      </div>

      <div className="container md:px-28 px-6 py-5 lg:flex lg:items-center lg:justify-evenly">
        {/* Image section */}
        <motion.div
          className="lg:w-full lg:pl-8  md:grid flex md:flex-row flex-row-reverse md:gap-3 gap-5 "
          variants={textVariants}
        >
          <img src={PlayStore} className="md:w-56 w-44 md:h-16 md:ml-0 ml-2" />
          <img src={AppStore} className="md:w-56 w-44  md:h-16" />
        </motion.div>
        <div className="flex gap-5 mt-3">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <img
              src={Iphone}
              alt="Surafel Kifle"
              className="md:w-[80%] md:h-full  object-cover "
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <img
              src={android}
              alt="Surafel Kifle"
              className="md:w-[80%] md:h-full object-cover "
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Index;

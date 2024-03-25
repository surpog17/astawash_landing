import React from "react";
import { motion } from "framer-motion";
import Dizer from "../../assets/PNG/dizer.png";
import Swift from "../../assets/PNG/swift.png";

export default function Cars() {
  const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      id="Home"
      className=" bg-primary font-poppins"
      initial="initial"
      animate="animate"
      variants={variants}
    >
      <div className=" flex flex-col-reverse lg:flex-row items-center   p-4 lg:w-3/4 gap-10">
        {/* Text on the left */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className=" flex md:flex-row flex-col justify-center md:px-24"
        >
          <div className="md:relative md:top-10">
            <img
              src={Dizer}
              alt="Surafel Kifle"
              className="md:w-[50rem] h-full object-cover "
            />
          </div>

          <div className="md:relative md:top-44 md:left-52">
            <img
              src={Swift}
              alt="Surafel Kifle"
              className="md:w-[50rem] h-full object-cover "
            />
          </div>
        </motion.div>
      </div>
      <motion.div
        id="Home"
        className="bg-[#5a5a5a] font-poppins md:px-24 md:py-20 py-3  px-6 "
        initial="initial"
        animate="animate"
        variants={variants}
      >
        <div className="">
          <div className=" flex flex-col-reverse lg:flex-row items-center p-4 lg:w-3/4 gap-10">
            <p className="text-sm font-light text-white">
              Consistent growth in numbers
            </p>
          </div>
          <div className="flex md:flex-row flex-col justify-between items-center gap-5">
            <div className="flex flex-col gap-3 items-start justify-center">
              <p className="text-5xl text-slate-50 font-libre">+65</p>
              <p className="text-sm text-slate-50">Companies supported</p>
            </div>
            <div className="flex flex-col gap-3 items-start justify-center">
              <p className="text-5xl text-slate-50 font-libre">+$1B</p>
              <p className="text-sm text-slate-50">Assets under Reminder</p>
            </div>
            <div className="flex flex-col gap-3 items-start justify-center">
              <p className="text-5xl text-slate-50 font-libre">+600</p>
              <p className="text-sm text-slate-50">users</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

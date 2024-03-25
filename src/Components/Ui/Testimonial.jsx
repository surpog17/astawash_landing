import React from "react";
import ButtonWithIcon from "../Inputs/Button";
import { FaQuoteRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Testimonial({
  userImage,
  userName,
  description,
  role,
  index,
}) {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`flex flex-col w-full   mb-8  border-none rounded-lg  border text-[#071033] border-black font-poppins py-5 px-5 gap-5`}
    >
      <p className=" md:mt-2 md:text-start w-full">{description}</p>

      <div className="flex items-start gap-3">
        <img
          src={userImage}
          alt={userName}
          className="h-[3rem] w-[10rem]  border-black object-cover "
        />
        <div className="">
          <h3 className="text-lg  font-bold text-start">{userName}</h3>
          <h3 className="text-xs  text-start">{role}</h3>
        </div>
      </div>
    </motion.div>
  );
}

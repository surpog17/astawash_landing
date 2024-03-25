import React from "react";
import { motion } from "framer-motion";
import Info from "./Info";
import Talk from "./Talk";

const containerAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const Index = () => {
  return (
    <motion.div
      className="bg-white "
      initial="hidden"
      animate="visible"
      variants={containerAnimation}
    >
      <div className="flex flex-col  justify-evenly gap-10">
        <Info />
        <Talk />
      </div>
    </motion.div>
  );
};

export default Index;

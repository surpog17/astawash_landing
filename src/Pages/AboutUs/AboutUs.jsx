import React, { useState } from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  const [showFullText, setShowFullText] = useState(false);

  const handleReadMore = () => {
    setShowFullText(!showFullText);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
  };

  const listVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 1 } },
  };

  return (
    <motion.div
      className="container mx-auto md:p-4 max-w-2xl"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.p
        className="mb-4 font-libre md:text-[28px] text-[20px]"
        variants={textVariants}
      >
        EthioTele, a leading tech company in Ethiopia, are making waves by
        modernizing fleet management. We've shifted from paper to digital
        records, boosting efficiency and accessibility. Moreover, our automated
        reminder system ensures compliance and safety, setting a high standard
        for tech-driven excellence in Ethiopian business. This transformation
        serves as an inspiring example of innovation in the Ethiopian tech
        industry.
      </motion.p>
    </motion.div>
  );
};

export default AboutUs;

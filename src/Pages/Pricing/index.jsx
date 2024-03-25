import React from "react";
import { motion } from "framer-motion";
import Price from "../../Components/Ui/Price";

const Index = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.7 } },
  };

  const priceVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  const dataArray = [
    {
      tag: "Car third party Reminder",
      description:
        "For all individuals and starters who want to start with domaining.",
      items: [
        { name: "Access to All Features", tag: null },
        { name: "1k lookups / per month", tag: null },
        { name: "No API Credits", tag: null, not: true },
        { name: "10 Monitoring Quota", tag: null },
        { name: "20% discount on backorders", tag: null },
        { name: "60 minutes Monitoring intervel", tag: null },
        { name: "Domain Name Appraisal ", tag: "Coming Soon" },
        { name: "Ip Monitoring", tag: "Coming Soon" },
        { name: "Backlink Monitoring", tag: "Coming Soon" },
      ],
      price: 200,
      price_mode: "per month",
    },
    {
      tag: "Corporate",
      description: "For corporate reminding services. per user",
      items: [
        { name: "Access to All Features", tag: null },
        { name: "1k lookups / per month", tag: null },
        { name: "No API Credits", tag: null },
        { name: "10 Monitoring Quota", tag: null },
        { name: "20% discount on backorders", tag: null },
        { name: "60 minutes Monitoring intervel", tag: null },
        { name: "Domain Name Appraisal ", tag: "Coming Soon" },
        { name: "Ip Monitoring", tag: "Coming Soon" },
        { name: "Backlink Monitoring", tag: "Coming Soon" },
      ],
      price: 300,
      price_mode: "per year",
    },
    {
      tag: "Bolo and insurance Reminder",
      description: "description3",
      items: [
        { name: "Access to All Features", tag: null },
        { name: "1k lookups / per month", tag: null },
        { name: "No API Credits", tag: null },
        { name: "10 Monitoring Quota", tag: null },
        { name: "20% discount on backorders", tag: null },
        { name: "60 minutes Monitoring intervel", tag: null },
        { name: "Domain Name Appraisal ", tag: "Coming Soon" },
        { name: "Ip Monitoring", tag: "Coming Soon" },
        { name: "Backlink Monitoring", tag: "Coming Soon" },
      ],
      price: 150,
      price_mode: "per month",
    },
  ];

  console.log(dataArray);

  return (
    <motion.div
      id="Service"
      className="min-h-screen bg-[#9c9fad] md:px-32 px-6 py-10"
      initial="initial"
      animate="animate"
      variants={containerVariants}
    >
      <div className="">
        <div className="border-t-[2px] border-gray-200"></div>
        <div className="flex gap-2 font-poppins items-center">
          <span className="text-xs font-semibold mb-4 text-primary">03</span>
          <h1 className="text-md font-bold mb-4 text-primary">Services</h1>
        </div>
      </div>
      <div className="">
        <div className="flex gap-2 font-libre items-center w-96">
          <span className="font-semibold mb-4 text-[#fff] text-3xl">
            Reminding you one step at a time
          </span>
        </div>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-10"
      >
        {dataArray?.map((price, index) => (
          <motion.div variants={priceVariants} className="col-span-1">
            <Price prices={price} index={index} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Index;

import React, { useEffect, useState } from "react";
import Logo from "../../assets/PNG/logo.png";
import SocialMedia from "../../Pages/Home/SocialMedia";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#143199] text-white p-4 ">
      <div className="flex mx-auto justify-evenly items-center">
        <div className="flex flex-col font-poppins gap-5">
          <div className="font-bold">Business</div>
          <div className="text-sm">
            <p>+ 62 845 3425</p>
            <p> talk@nativeconsult.com</p>
          </div>
        </div>
        <div className="flex flex-col font-poppins gap-5">
          <div className="font-bold">Office</div>
          <div className="text-sm">
            <p>+ 62 845 3425</p>
            <p> talk@nativeconsult.com</p>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-between items-center md:px-32 py-6">
        <img className="md:w-96" src={Logo} />
        <SocialMedia />
      </div>

      <p className="text-center py-10 font-poppins">
        &copy; {currentYear}, Inc. A member of Blabla Group
      </p>
    </footer>
  );
};

export default Footer;

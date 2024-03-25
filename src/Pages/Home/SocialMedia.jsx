import React, { useEffect, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTimes,
  FaTwitter,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function SocialMedia() {
  const [hovered, setHovered] = useState(false);
  const [showTwitterIcon, setShowTwitterIcon] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTwitterIcon(false);
    }, 3000);

    // Clear the timeout if the component is unmounted before 3 seconds
    return () => clearTimeout(timer);
  }, []);
  return (
    <ul className=" flex list-inside justify-start lg:justify-start gap-5">
      <a
        href="#!"
        className="px-2 rounded-md p-2  bg-transparent  transition duration-1000 ease-in-out  hover:text-blue-700"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="#!"
        className="px-2 rounded-md p-2  bg-transparent  transition duration-1000 ease-in-out  hover:text-blue-700"
      >
        <FaFacebook size={24} className="" />
      </a>
      <a
        href="#!"
        className="px-2 rounded-md p-2  bg-transparent  transition duration-1000 ease-in-out  hover:text-orange-400"
      >
        <FaInstagram size={24} />
      </a>
      <a
        href="#!"
        className={`px-2 rounded-md p-2  bg-transparent  transition duration-1000 ease-in-out ${
          !hovered ? "hover:text-blue-300" : "hover:text-white"
        }`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {hovered ? <FaXTwitter size={24} /> : <FaTwitter size={24} />}
      </a>
    </ul>
  );
}

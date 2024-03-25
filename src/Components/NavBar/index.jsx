import React, { useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link, animateScroll as scroll } from "react-scroll";
import ButtonWithIcon from "../Inputs/Button";
import { MdOutlineFileDownload } from "react-icons/md";
import Logo from "../../assets/PNG/logo.png";

export default function Index() {
  const [openNav, setOpenNav] = React.useState(false);
  const [hovered, setHovered] = useState(false);
  const [showTwitterIcon, setShowTwitterIcon] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTwitterIcon(false);
    }, 3000);

    // Clear the timeout if the component is unmounted before 3 seconds
    return () => clearTimeout(timer);
  }, []);
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-5 lg:flex-row lg:items-center lg:justify-center lg:gap-44 ">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 text-white   font-medium font-poppins  md:border-t-[0.5px] border-gray-200 w-32 cursor-pointer"
      >
        <Link
          to="AboutMe"
          className="flex items-center"
          smooth={true}
          duration={1500}
        >
          Insight
        </Link>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 text-white  font-medium font-poppins md:border-t-[0.5px] border-gray-200 w-32 cursor-pointer"
      >
        <Link to="Application" smooth={true} className="flex items-center">
          App
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 text-white  font-medium font-poppins md:border-t-[0.5px] border-gray-200 w-32 cursor-pointer "
      >
        <Link to="Service" smooth={true} className="flex items-center">
          Services
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 text-white  font-medium font-poppins md:border-t-[0.5px] border-gray-200 w-32 cursor-pointer"
      >
        <Link to="Contact" smooth={true} className="flex items-center">
          Contact
        </Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="bg-primary text-black  w-screen-xl px-4 py-0 border-none lg:px-8 lg:py-4 font-poppins  ">
      <div className="container mx-auto  text-blue-gray-900">
        <div className="flex md:flex-row flex-col items-center md:justify-between">
          <div className="flex items-center">
            <Typography
              as="a"
              href="#"
              className="cursor-pointer py-1.5  font-medium font-poppins"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <img className="md:w-[30%]" src={Logo} />
            </Typography>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 my-4 text-inherit hover:bg-[transparent] focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6 text-white"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>

          <div className="flex items-center gap-5 ">
            <div className="text-white text-sm">+25195678809</div>
            <div className="text-white text-sm border-2 rounded-full px-3 border-white p-2 ">
              astawash@gmail.com
            </div>
            <div className="text-white text-xs px-2 border-2 border-white p-1 rounded-full flex flex-col gap-1">
              <div className="">En</div>
              <div className="">Am</div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block">{navList}</div>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">{navList}</div>
      </MobileNav>
    </Navbar>
  );
}

import React from "react";
import Bell from "./../../assets/PNG/astawash_bell.png";
import InputField from "../../Components/Inputs/InputField";
import ButtonWithIcon from "../../Components/Inputs/Button";
import { BsArrowUpRightCircle } from "react-icons/bs";
export default function Info() {
  return (
    <div
      id="Contact"
      className="bg-[#143199] py-10  px-6 md:px-32 gap-6 relative"
    >
      <div className="absolute top-0 left-0">
        <div className="md:h-24 w-28 bg-white"></div>
        <div className="md:h-24 w-14 bg-white"></div>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-2 items-center">
        <h1 className="font-libre md:text-6xl text-4xl text-white">
          what’s new on Astawash.
        </h1>

        <div className="">
          <p className="font-poppins text-sm text-[505A80] text-white">
            We accelerate the goals of growth stage companies by providing the
            expertise and experience they need to hit their next stage of growth
            faster.
          </p>
          <div className="flex md:flex-row  items-end gap-5">
            <InputField
              placeholder={"Your email address"}
              className="w-full font-poppins border-b border-gray-300  focus:outline-none bg-transparent py-4 font-bold text-white placeholder:text-white"
            />
            <ButtonWithIcon
              className="w-32 h-10 font-poppins bg-white hover:bg-primary border border-primary hover:border hover:border-white  rounded-full text-primary  hover:text-white   px-4 py-1  focus:outline-none transition duration-1000 ease-in-out"
              text="Explore"
              icon={<BsArrowUpRightCircle size={20} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

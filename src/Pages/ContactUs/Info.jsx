import React from "react";
import Bell from "./../../assets/PNG/astawash_bell.png";
export default function Info() {
  return (
    <div className="bg-white md:min-h-screen py-10  px-6 md:px-32 ">
      <div className="grid  grid-cols-1 md:grid-cols-2 items-center">
        <img src={Bell} className="w-96" />
        <div className="flex flex-col gap-10">
          <h1 className="font-libre md:text-6xl text-4xl">
            Let’s achieve <span className="text-secondary">best</span> result of
            drivers and events.
          </h1>
          <p className="font-poppins text-sm text-[505A80]">
            We accelerate the goals of growth stage companies by providing the
            expertise and experience they need to hit their next stage of growth
            faster.
          </p>
        </div>
      </div>
    </div>
  );
}

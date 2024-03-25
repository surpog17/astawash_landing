import React from "react";
import Pointer from "../../assets/SVG/Subtract.svg";
import ButtonWithIcon from "../Inputs/Button";
export default function Price({ title, className, prices, index }) {
  const listItemStyle = {
    listStyleImage: `url(${Pointer})`,
  };
  return (
    <div
      className={`max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto ${
        index == 1 ? "bg-primary text-white" : "bg-white md:mt-16"
      } p-6 rounded-md shadow-md font-poppins flex flex-col  md:justify-center `}
    >
      <div className="px-5 py-2 bg-[#f1f1f1] text-black  text-center  rounded-sm my-4 inline-block">
        {prices?.tag}
      </div>

      <p className="mb-4 md:py-3">{prices?.description}</p>
      <div className="border-t-2 border-gray-200 p-3 " />
      <div className="flex flex-col  items-start">
        <p
          className={`text-4xl font-bold ${
            index == 1 ? "text-ask_white mb-4" : "text-ask_darkBlue mb-4"
          }`}
        >
          ${prices?.price}
        </p>
        <p
          className={`text-sm font-semibold ${
            className ? "text-ask_yellow mb-4" : "text-ask_blue mb-4"
          }`}
        >
          {prices?.price_mode}
        </p>
      </div>
      <div className="border-t-2 border-gray-200 px-0 " />
      <ul className=" grid gap-5 py-5">
        {prices?.items?.map((items) => (
          <div className="flex items-center gap-1">
            {!items?.not ? (
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.25 18.0664C14.2206 18.0664 18.25 14.037 18.25 9.06641C18.25 4.09584 14.2206 0.0664062 9.25 0.0664062C4.27944 0.0664062 0.25 4.09584 0.25 9.06641C0.25 14.037 4.27944 18.0664 9.25 18.0664ZM9.01822 12.7066L14.0182 6.70659L12.4818 5.42622L8.1828 10.585L5.95711 8.3593L4.54289 9.77351L7.54289 12.7735L8.3172 13.5478L9.01822 12.7066Z"
                  fill={index % 2 == 0 ? "#141414" : "#fff"}
                />
              </svg>
            ) : (
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.25 12.0664C21.25 17.037 17.2206 21.0664 12.25 21.0664C7.27944 21.0664 3.25 17.037 3.25 12.0664C3.25 7.09584 7.27944 3.06641 12.25 3.06641C17.2206 3.06641 21.25 7.09584 21.25 12.0664Z"
                  fill="#FF0000"
                />
                <path
                  d="M16.25 8.06641L8.25 16.0664"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.25 8.06641L16.25 16.0664"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}

            <li className="text-xs">{items?.name}</li>
            {items?.tag && (
              <span className="text-[#30b11d] bg-[#c9fad6] text-[9px] rounded-full px-2 py-1">
                {items?.tag}
              </span>
            )}
          </div>
        ))}
      </ul>
      <div className="flex justify-center">
        <ButtonWithIcon
          className={`w-64 h-10 flex-shrink-0 ${
            index % 2 == 0
              ? "text-white bg-black"
              : " bg-[#f9d783] text-primary"
          } rounded-md font-poppins  text-[12px]`}
          text="Get Start"
        />
      </div>
    </div>
  );
}

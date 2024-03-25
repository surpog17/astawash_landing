import React from "react";
import ButtonWithIcon from "../Inputs/Button";
import { GrPrevious, GrNext } from "react-icons/gr";
import {
  IoIosArrowBack,
  IoIosArrowDropright,
  IoIosArrowForward,
} from "react-icons/io";

function Pagination({ page, onChange, count }) {
  console.log(page <= 1, page, "page");
  return (
    <div>
      <ButtonWithIcon
        className={`inline-flex items-center justify-center w-16 h-16 mr-2  transition-colors duration-150 ${
          page === 1
            ? " focus:shadow-outline  cursor-not-allowed"
            : " focus:shadow-outline bg-white "
        }`}
        onClick={() => {
          onChange(page - 1);
        }}
        disable={page === 1 ? true : false}
        icon={<IoIosArrowBack size={20} className="" />}
      />

      <ButtonWithIcon
        className={`inline-flex items-center justify-center w-16 h-16 mr-2   transition-colors duration-150 ${
          page === count
            ? " focus:shadow-outline   cursor-not-allowed"
            : " focus:shadow-outline bg-white"
        }`}
        onClick={() => {
          onChange(page + 1);
        }}
        disable={page === count}
        icon={<IoIosArrowForward size={20} className="" />}
      />
    </div>
  );
}

export default Pagination;

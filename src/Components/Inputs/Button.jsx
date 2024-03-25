// ButtonWithIcon.js

import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const ButtonWithIcon = ({
  text,
  icon,
  onClick,
  type = "button",
  className,
  disable = false,
  to = "/",
}) => {
  console.log(disable, "disabled");
  return (
    <>
      {type != "link" ? (
        <button
          type={type}
          onClick={onClick}
          disabled={disable}
          className={
            className
              ? className
              : "flex items-center px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none hover:bg-blue-600"
          }
        >
          {icon ? (
            <div className="flex gap-5 items-center">
              {text ? text : ""}
              {icon && <span className={text ? "mr-2" : ""}>{icon}</span>}
            </div>
          ) : text ? (
            text
          ) : (
            ""
          )}
        </button>
      ) : (
        <NavLink
          to={to}
          className={
            className
              ? className
              : "flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none hover:bg-blue-600"
          }
        >
          {icon ? (
            <div className="flex gap-5 items-center text-center">
              {text ? text : ""}
              {icon && <span className={text ? "mr-2" : ""}>{icon}</span>}
            </div>
          ) : text ? (
            text
          ) : (
            ""
          )}
        </NavLink>
      )}
    </>
  );
};

export default ButtonWithIcon;

import { useEffect, useState } from "react";
import plusIcon from "../assets/images/Group 1000004839.png";
import minusIcon from "../assets/images/Group 1000004840.png";

export const NumberSpin = ({
  value = 0,
  min = 0,
  max = 10,
  onChange = () => {},
}) => {
  return (
    <div className="flex items-center gap-[5px]">
      <img
        src={minusIcon}
        onClick={() => {
          if (value - 1 >= min) onChange(value - 1);
        }}
        className="cursor-pointer"
      ></img>
      <div>{value}</div>
      <img
        src={plusIcon}
        onClick={() => {
          if (value + 1 <= max) onChange(value + 1);
        }}
        className="cursor-pointer"
      ></img>
    </div>
  );
};

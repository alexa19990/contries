import React, { useEffect, useRef, useState } from "react";
import moonIcon from "../assets/moon.png";
import sunIcon from "../assets/icons8-sun-50.png";

const Header = (props) => {


  return (
    <div className={props.mode ? "flex border shadow-lg text-center items-center justify-between w-fll px-32 py-8" : "flex  shadow-lg text-center items-center justify-between w-fll px-32 py-8 bg-zinc-900		"}>
      <h1 className="text-3xl font-semibold">Where in the world?</h1>
      <div
        className="flex flex-row cursor-pointer items-center"
        onClick={() => {
          props.setMode(!props.mode);
        }}
      >
        <img src={props.mode ? moonIcon : sunIcon} className="w-4 h-4 mx-2 white	" alt="" />
        <p className="font-medium">Dark Mode</p>
      </div>
    </div>
  );
};

export default Header;

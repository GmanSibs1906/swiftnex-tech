import React from "react";
import { smallLogo } from "../assets/images";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <div className=" px-[50px] flex items-center ">
      <img src={smallLogo} alt="" className=" hidden md:flex my-[10px] h-[50px] object-contain " />
      <FontAwesomeIcon icon={faBars} className=" md:hidden text-[#ff5631] text-[30px] " />
      <div className=" hidden md:flex items-center ">
      <NavLink to="/">
        <h3 className=" navLinks "> Home </h3>
      </NavLink>
      <NavLink to="">
        <h3 className=" navLinks "> Services </h3>
      </NavLink>
      <NavLink to="">
        <h3 className=" navLinks "> About </h3>
      </NavLink>
      </div>
      <NavLink to="" className=" ml-auto p-[10px] relative ">
        <h3 className=" text-white font-bold p-[6px] m-[10px] rounded-md text-sm bg-[#ff5631] neon uppercase ">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Contact Us
        </h3>
      </NavLink>
    </div>
  );
}

export default NavBar;

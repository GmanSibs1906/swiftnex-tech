import React, { useState } from "react";
import { smallLogo } from "../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className=" flex flex-col max-w-[100vw] h-full relative ">
      <div className=" px-[50px] flex items-center fixed top-0 z-50 bg-[#ffffffeb] w-full ">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          delay={200}
          onClick={() =>setOpenMenu(false)}
        >
          <img
            src={smallLogo}
            alt=""
            className=" my-[10px] h-[50px] object-contain "
          />
        </Link>

        <div className="ml-auto">
          <FontAwesomeIcon
            onClick={() => setOpenMenu(!openMenu)} // Use a function here
            icon={openMenu ? faRectangleXmark : faBars}
            className="md:hidden text-[#ff5631] text-[30px]"
          />
        </div>

        <div className=" hidden md:flex items-center ">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            delay={200}
          >
            <h3 className=" navLinks "> Home </h3>
          </Link>

          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            delay={200}
          >
            <h3 className=" navLinks "> About </h3>
          </Link>

          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            delay={200}
          >
            <h3 className=" navLinks "> Services </h3>
          </Link>
        </div>

        <Link
          className=" hidden md:flex ml-auto p-[10px] relative "
          to="contact"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          delay={200}
        >
          <h3 className=" text-white font-bold p-[6px] m-[10px] rounded-md text-sm bg-[#ff5631] neon uppercase ">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Contact Us
          </h3>
        </Link>
      </div>

      {/* <div className=" w-[100%] h-[375px] fixed z-40 bg-[#ffffffeb] top-[69px] p-[15px] flex flex-col md:hidden "> */}
      <div className={`w-[100%] h-[375px] fixed z-40 bg-[#ffffffeb] top-[69px] p-[15px] ${openMenu ? 'flex flex-col' : 'hidden'} md:hidden`}>

          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            delay={200}
            onClick={() =>setOpenMenu(false)}
          >
            <h3 className=" my-[20px] text-[30px] ml-[10px] font-bold border-b border-b-[#ff57312a] "> Home </h3>
          </Link>

          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            delay={200}
            onClick={() =>setOpenMenu(false)}
          >
            <h3 className=" my-[20px] text-[30px] ml-[10px] font-bold border-b border-b-[#ff57312a] "> About </h3>
          </Link>

          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            delay={200}
            onClick={() =>setOpenMenu(false)}
          >
            <h3 className=" my-[20px] text-[30px] ml-[10px] font-bold border-b border-b-[#ff57312a] "> Services </h3>
          </Link>

          <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          delay={200}
          onClick={() =>setOpenMenu(false)}
        >
          <h3 className=" my-[20px] text-[30px] ml-[10px] font-bold border-b border-b-[#ff57312a] ">
            Contact Us
          </h3>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;

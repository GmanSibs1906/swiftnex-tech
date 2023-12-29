import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChess,
  faLightbulb,
  faPersonCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { picLogo } from "../assets/images";

function About() {
  return (
    <div className=" px-[50px] mt-[80px] ">
      {/* heading */}
      <div className=" flex w-full justify-center ">
        <h1 className=" text-[26px] font-thin flex items-center border-b-[#ff5631] border-b ">
          <span className=" mb-[3px] mr-[2px] text-[#ff5631] ">{`< `}</span>
          <img
            src={picLogo}
            alt=""
            className=" h-[20px] object-contai mr-[-4px] "
          />
          <span>{`olutions Tailored for You`}</span>
          <span className=" mb-[3px] ml-[5px] text-[#ff5631] ">{` />`}</span>
        </h1>
      </div>

      {/* about */}
      <div className=" flex w-full my-[40px] justify-center ">
        <p className=" w-[50vw] text-center font-light text-[14px] ">
          Welcome to SwiftNex Tech – where innovation drives your success!
          Tailored solutions for{" "}
          <span className=" font-bold text-[#ff5631] underline ">
            {" "}
            startups and established businesses.{" "}
          </span>
          From websites to web apps, mobile apps, social marketing, and SEO –
          we've got your smart, fast profits covered. Propel your brand, expand
          reach, and boost profitability with us!
        </p>
      </div>

      {/* why work with us */}
      <div className=" w-full flex justify-center ">
        <span className=" text-[26px] font-thin  mt-[20px] border-b-[#ff5631] border-b ">
          Why work with us
        </span>
      </div>
      <div className=" flex flex-wrap w-full justify-evenly mt-[30px] ">
        {/* client is king */}
        <div className=" my-[15px] flex flex-col items-center w-[300px] ">
          <div className=" w-[50px] h-[50px] rounded-full bg-[#ff5631] flex items-center justify-center ">
            <FontAwesomeIcon
              icon={faChess}
              className=" text-[25px] text-white "
            />
          </div>
          <h2 className=" uppercase text-[14px] font-bold mt-[15px] ">
            Client is king
          </h2>
          <span className=" w-[20px] h-[5px] bg-[#ff5631] rounded-md mt-[10px] mb-[15px] " />
          <div className=" font-light text-[12px] text-center ">
            Clear and concise communication tailored to clients' needs. A focus
            on client satisfaction and success as our top priority.
            Understanding clients' perspectives and concerns, ensuring a
            positive experience.
          </div>
        </div>

        {/* Innovative Solutions */}
        <div className=" my-[15px] flex flex-col items-center w-[300px] ">
          <div className=" w-[50px] h-[50px] rounded-full bg-[#ff5631] flex items-center justify-center ">
            <FontAwesomeIcon
              icon={faLightbulb}
              className=" text-[25px] text-white "
            />
          </div>
          <h2 className=" uppercase text-[14px] font-bold mt-[15px] ">
            Innovative Solutions
          </h2>
          <span className=" w-[20px] h-[5px] bg-[#ff5631] rounded-md mt-[10px] mb-[15px] " />
          <div className=" font-light text-[12px] text-center ">
            Flexibility to navigate changing requirements and evolving
            technologies. A culture of collaboration for achieving common goals.
            Bringing imaginative solutions to the table and staying
            technologically innovative.
          </div>
        </div>

        {/* Innovative Solutions */}
        <div className=" my-[15px] flex flex-col items-center w-[300px] ">
          <div className=" w-[50px] h-[50px] rounded-full bg-[#ff5631] flex items-center justify-center ">
            <FontAwesomeIcon
              icon={faPersonCircleCheck}
              className=" text-[25px] text-white "
            />
          </div>
          <h2 className=" uppercase text-[14px] font-bold mt-[15px] ">
            Reliable, Transparent
          </h2>
          <span className=" w-[20px] h-[5px] bg-[#ff5631] rounded-md mt-[10px] mb-[15px] " />
          <div className=" font-light text-[12px] text-center ">
            Efficient project management, delivering quality results within
            specified timelines. Consistent and reliable delivery of promised
            services and solutions. Open and transparent communication and
            operations to build trust with clients.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

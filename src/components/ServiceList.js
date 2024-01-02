import React from 'react'
import {webDesign, mobileApp, support} from "../assets/images"

function ServiceList() {
  return (
    <div className=" w-full flex flex-col md:flex-row items-center  md:justify-around " >

{/* Web Design */}
        <div className=" w-[90vw] md:w-[25vw] flex flex-col items-center">
            <img src={webDesign} alt="website design" className=" rounded-lg shadow-2xl shadow-[#ff5631] " />
            <h2 className=" uppercase text-[14px] font-bold mt-[15px] ">
            Web Design
          </h2>
          <span className=" w-[20px] h-[5px] bg-[#ff5631] rounded-md mt-[10px] mb-[15px] " />
        </div>

        {/* Mobile Apps */}
        <div className=" w-[90vw] md:w-[25vw] flex flex-col items-center">
            <img src={mobileApp} alt="website design" className=" rounded-lg shadow-2xl shadow-[#ff5631] " />
            <h2 className=" uppercase text-[14px] font-bold mt-[15px] ">
            Mobile Apps
          </h2>
          <span className=" w-[20px] h-[5px] bg-[#ff5631] rounded-md mt-[10px] mb-[15px] " />
        </div>

        {/* Customer Support */}
        <div className=" w-[90vw] md:w-[25vw] flex flex-col items-center">
            <img src={support} alt="website design" className=" rounded-lg shadow-2xl shadow-[#ff5631] " />
            <h2 className=" uppercase text-[14px] font-bold mt-[15px] ">
            Customer Support
          </h2>
          <span className=" w-[20px] h-[5px] bg-[#ff5631] rounded-md mt-[10px] mb-[15px] " />
        </div>
    </div>
  )
}

export default ServiceList
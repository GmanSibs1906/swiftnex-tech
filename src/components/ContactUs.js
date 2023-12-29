import React from "react";

function ContactUs() {
  return (
    <div className=" w-full flex flex-col mt-[30px] md:mt-[60px] lg:mt-[100px] ">
      <div className=" w-full  bg-[#1a1a1a] flex flex-col justify-center items-center pb-[20px]  ">
        <div className=" text-white my-[20px] text-[20px] italic mt-[40px] ">
          {" "}
          Interested in working with us?{" "}
        </div>
        <div className=" w-[200px] h-[40px] border border-[#ff5631] rounded-md flex justify-center items-center mt-[10px] ">
          <p className=" font-light text-[12px] text-[#ff5631] uppercase ">
            {" "}
            get in touch{" "}
          </p>
        </div>
        <div className=" mt-[20px] text-[20px] font-semibold text-white ">
          {" "}
          hello@swiftnextech.com{" "}
        </div>
        <div className=" mt-[5px] text-[18px] font-semibold text-white ">
          {" "}
          +27 71 517 6227
        </div>
        <div className=" mt-[15px] text-[12px] font-thin text-[#ff5632] ">
          built and designed by Swift<span className=" text-white ">Nex</span>{" "}
          Tech @2024
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

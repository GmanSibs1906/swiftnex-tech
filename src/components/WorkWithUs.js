import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChess } from "@fortawesome/free-solid-svg-icons";

function WorkWithUs() {
  return (
    <div className=" flex flex-col items-center w-[300px] ">
            <div className=" w-[50px] h-[50px] rounded-full bg-[#ff5631] flex items-center justify-center ">
                <FontAwesomeIcon icon={faChess} className=" text-[25px] text-white " />
            </div>
            <h2 className=" uppercase text-[14px] font-bold mt-[15px] ">Client is king</h2>
            <span className=" w-[20px] h-[5px] bg-[#ff5631] rounded-md mt-[10px] mb-[15px] " />
            <div className=" font-light text-[12px] text-center ">
            Clear and concise communication tailored to clients' needs. A focus on client satisfaction and success as our top priority. Understanding clients' perspectives and concerns, ensuring a positive experience.
            </div>
        </div>
  )
}

export default WorkWithUs
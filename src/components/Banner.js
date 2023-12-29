import React from 'react'
import {banner} from "../assets/images"

function Banner() {
  return (
    <div>
        <img src={banner} alt="banner" className=" w-full object-contain my-[30px] md:my-[50px] lg:my-[100px] " />
    </div>
  )
}

export default Banner
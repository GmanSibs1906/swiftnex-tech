import React from "react";
import { startup, established } from "../assets/images";

function Services() {
  return (
    <div className=" my-[40px] flex flex-col ">
      <div className=" flex w-full flex-col md:flex-row ">
        {/* start up offer  */}
        <div className=" w-full md:w-1/2 ">
          <img src={startup} alt="" className="" />
        </div>
        <div className=" w-full md:w-1/2 flex flex-col lg:px-[30px] px-[20px]  ">
        <h2 className=" text-[20px] font-light underline text-[#ff5631] uppercase ">
            Are you a startup?
          </h2>
          <div className=" font-light text-[14px] mt-[20px] mb-[10px] ">
            We strive in turning startup visions into reality. Our tailored
            services are designed to empower your business journey right from
            the beginning. Here's part of what we offer:
          </div>

          <div className=" uppercase text-[14px] mb-[10px] ">
            1. Digital Presence Magic:
          </div>
          <div className=" font-light text-[18px] flex flex-col ">
            <div className=" text-[14px] mb-[2px] ">
            <span className=" text-[#ff5631] ">Websites That Wow:</span>{" "}
              Your digital storefront to make a lasting first impression.
            </div>
            <div className=" text-[14px] ">
             
              <span className=" text-[#ff5631] ">Mobile Apps That Matter:</span>{" "}
              Stay connected with your audience on the go.
            </div>
          </div>

          <div className=" uppercase text-[14px] mb-[10px] mt-[20px] ">
            2. Business Boosters:
          </div>
          <div className=" font-light text-[18px] flex flex-col ">
            <div className=" text-[14px] mb-[2px] ">
              <span className=" text-[#ff5631] ">Smart Systems:</span>{" "}
              Streamlined solutions to make your operations efficient.
            </div>
            <div className=" text-[14px] ">
              <span className=" text-[#ff5631] ">SEO Mastery: </span> Elevate
              your visibility and stand out in the digital crowd.
            </div>
          </div>

          <div className=" uppercase text-[14px] mb-[10px] mt-[20px] ">
            3. Profit Fast, Profit Smart:
          </div>
          <div className=" font-light text-[18px] flex flex-col ">
            <div className=" text-[14px] mb-[2px] ">
              <span className=" text-[#ff5631] ">Innovative Strategies:</span>{" "}
              Your digital storefront to make a lasting first impression.
            </div>
            <div className=" text-[14px] ">
           
              <span className=" text-[#ff5631] ">Collaborate & Conquer: </span>{" "}
              Join forces with us for strategic success.
            </div>
          </div>

          <div className=" font-light text-[14px] mt-[20px] mb-[10px] ">
            Embark on your startup journey with{" "}
            <span className=" font-bold ">Swift</span>
            <span className=" font-bold text-[#ff5631] ">Nex</span>
            <span className="font-bold"> Tech</span> – where simplicity meets
            innovation, and success is just a click away!
          </div>
        </div>
      </div>

      <div className="  flex w-full flex-col md:flex-row mt-[40px] ">
        {/* established up offer  */}
        <div className=" w-full md:w-1/2 flex flex-col lg:px-[30px] px-[20px] ">
          <h2 className=" text-[20px] font-light underline text-[#ff5631] uppercase ">
            Established business?
          </h2>
          <div className=" font-light text-[14px] mt-[20px] mb-[10px] ">
            We are dedicated to supercharging your established business for unparalleled success. Here's how we can elevate your operations:
          </div>

          <div className=" uppercase text-[14px] mb-[10px] ">
          1. Digital Transformation Delights:
          </div>
          <div className=" font-light text-[18px] flex flex-col ">
            <div className=" text-[14px] mb-[2px] ">
            <span className=" text-[#ff5631] ">Customized Company Systems : </span>{" "}
            Tailored tech solutions for streamlined operations.
            </div>
            <div className=" text-[14px] ">
         
              <span className=" text-[#ff5631] ">Mobile Mastery: </span>{" "}
              Harness the power of mobile apps for enhanced accessibility.
            </div>
          </div>

          <div className=" uppercase text-[14px] mb-[10px] mt-[20px] ">
          2. Brand Brilliance Boosters:
          </div>
          <div className=" font-light text-[18px] flex flex-col ">
            <div className=" text-[14px] mb-[2px] ">
              <span className=" text-[#ff5631] ">Web Wizardry: </span>{" "}
              Elevate your online presence with stunning and effective websites.
            </div>
            <div className=" text-[14px] ">
               <span className=" text-[#ff5631] ">SEO Sorcery:  </span> Propel your brand to the top and stand out in the digital realm.
            </div>
          </div>

          <div className=" uppercase text-[14px] mb-[10px] mt-[20px] ">
            3. Profit Fast, Profit Smart:
          </div>
          <div className=" font-light text-[18px] flex flex-col ">
            <div className=" text-[14px] mb-[2px] ">
             <span className=" text-[#ff5631] ">Strategic Alliances: </span>{" "}
            Join forces with us for innovative and profitable 
            </div>
            <div className=" text-[14px] ">
            
              <span className=" text-[#ff5631] ">Profit Accelerators: </span>{" "}
              Expert strategies to boost profitability and market presence.
            </div>
          </div>

          <div className=" font-light text-[14px] mt-[20px] mb-[10px] ">
          Join the league of successful businesses partnering with{" "}
            <span className=" font-bold ">Swift</span>
            <span className=" font-bold text-[#ff5631] ">Nex</span>
            <span className="font-bold"> Tech</span> - where simplicity meets sophistication, and excellence is our standard.
          </div>
        </div>
        <div className=" w-full md:w-1/2 ">
          <img src={established} alt="" className="" />
        </div>
      </div>
    </div>
  );
}

export default Services;

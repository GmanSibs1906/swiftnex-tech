import React, { useState } from "react";
import { startup, established } from "../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Services() {

  const [startUpOne, setStartUpOne] = useState(false);
  const [startUpTwo, setStartUpTwo] = useState(false);
  const [startUpThree, setStartUpThree] = useState(false);


  const [estOne, setEstOne] = useState(false);
  const [estTwo, setEstTwo] = useState(false);
  const [estThree, setEstThree] = useState(false);

  return (
    <div className=" my-[40px] flex flex-col " id="services">

      {/* ----------STARTUP OFFER---------- */}
      <div className=" flex w-full flex-col md:flex-row ">
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

          {/* -----startupOne----- */}
          <div
            className=" flex flex-col border border-[#ff5631] rounded-sm "
            onClick={() => setStartUpOne(!startUpOne)}
          >
            <div
              className={` py-[10px] px-[8px] uppercase text-[14px] font-semibold flex justify-between ${
                !startUpOne ? " bg-[#ff5631] " : " bg-white "
              } `}
            >
              <span>1. Digital Presence Magic</span>
              <span className="  ">
                <FontAwesomeIcon
                  icon={startUpOne ? faChevronUp : faChevronDown}
                  className={` ${!startUpOne ? "text-white" : "text-[#ff5631]"} `}
                />
              </span>
            </div>

            <div
              className={` ${
                startUpOne ? "flex flex-col px-[8px] pb-[10px]" : "hidden"
              } `}
            >
              <div className=" font-light text-[18px] flex flex-col ">
                <div className=" text-[14px] mb-[2px] mt-[5px] ">
                  <span className=" text-[#ff5631] ">
                  Websites That Wow:{" "}
                  </span>{" "}
                  Your digital storefront to make a lasting first impression.
                </div>
                <div className=" text-[14px] ">
                  <span className=" text-[#ff5631] mb-[5px] ">
                  Mobile Apps That Matter:{" "}
                  </span>{" "}
                  Stay connected with your audience on the go.
                </div>
              </div>
            </div>
          </div>

           {/* -----startupTwo----- */}
           <div
            className=" flex flex-col border border-[#ff5631] rounded-sm mt-[20px] "
            onClick={() => setStartUpTwo(!startUpTwo)}
          >
            <div
              className={` py-[10px] px-[8px] uppercase text-[14px] font-semibold flex justify-between ${
                !startUpTwo ? " bg-[#ff5631] " : " bg-white "
              } `}
            >
              <span>2. Business Boosters:</span>
              <span className="  ">
                <FontAwesomeIcon
                  icon={startUpTwo ? faChevronUp : faChevronDown}
                  className={` ${!startUpTwo ? "text-white" : "text-[#ff5631]"} `}
                />
              </span>
            </div>

            <div
              className={` ${
                startUpTwo ? "flex flex-col px-[8px] pb-[10px]" : "hidden"
              } `}
            >
              <div className=" font-light text-[18px] flex flex-col ">
                <div className=" text-[14px] mb-[2px] mt-[5px] ">
                  <span className=" text-[#ff5631] ">
                  Smart Systems:{" "}
                  </span>{" "}
                  Streamlined solutions to make your operations efficient.
                </div>
                <div className=" text-[14px] ">
                  <span className=" text-[#ff5631] mb-[5px] ">
                  SEO Mastery:{" "}
                  </span>{" "}
                  Elevate your visibility and stand out in the digital crowd.
                </div>
              </div>
            </div>
          </div>

          {/* -----startupThree----- */}
          <div
            className=" flex flex-col border border-[#ff5631] rounded-sm mt-[20px] "
            onClick={() => setStartUpThree(!startUpThree)}
          >
            <div
              className={` py-[10px] px-[8px] uppercase text-[14px] font-semibold flex justify-between ${
                !startUpThree ? " bg-[#ff5631] " : " bg-white "
              } `}
            >
              <span>3. Profit Fast, Profit Smart:</span>
              <span className="  ">
                <FontAwesomeIcon
                  icon={startUpThree ? faChevronUp : faChevronDown}
                  className={` ${!startUpThree ? "text-white" : "text-[#ff5631]"} `}
                />
              </span>
            </div>

            <div
              className={` ${
                startUpThree ? "flex flex-col px-[8px] pb-[10px]" : "hidden"
              } `}
            >
              <div className=" font-light text-[18px] flex flex-col ">
                <div className=" text-[14px] mb-[2px] mt-[5px] ">
                  <span className=" text-[#ff5631] ">
                  Innovative Strategies:{" "}
                  </span>{" "}
                  Your digital storefront to make a lasting first impression.
                </div>
                <div className=" text-[14px] ">
                  <span className=" text-[#ff5631] mb-[5px] ">
                  Collaborate & Conquer:{" "}
                  </span>{" "}
                  Join forces with us for strategic success.
                </div>
              </div>
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

      {/* ----------ESTABLISHED OFFER---------- */}
      <div className="  flex w-full flex-col md:flex-row mt-[40px] ">
        <div className=" w-full md:w-1/2 flex flex-col lg:px-[30px] px-[20px] ">
          <h2 className=" text-[20px] font-light underline text-[#ff5631] uppercase ">
            Established business?
          </h2>
          <div className=" font-light text-[14px] mt-[20px] mb-[10px] ">
            We are dedicated to supercharging your established business for
            unparalleled success. Here's how we can elevate your operations:
          </div>

          {/* -----estOne----- */}
          <div
            className=" flex flex-col border border-[#ff5631] rounded-sm "
            onClick={() => setEstOne(!estOne)}
          >
            <div
              className={` py-[10px] px-[8px] uppercase text-[14px] font-semibold flex justify-between ${
                !estOne ? " bg-[#ff5631] " : " bg-white "
              } `}
            >
              <span>1. Digital Transformation Delights:</span>
              <span className="  ">
                <FontAwesomeIcon
                  icon={estOne ? faChevronUp : faChevronDown}
                  className={` ${!estOne ? "text-white" : "text-[#ff5631]"} `}
                />
              </span>
            </div>

            {/* <div className=" flex flex-col  "> */}
            <div
              className={` ${
                estOne ? "flex flex-col px-[8px] pb-[10px]" : "hidden"
              } `}
            >
              <div className=" font-light text-[18px] flex flex-col ">
                <div className=" text-[14px] mb-[2px] mt-[5px] ">
                  <span className=" text-[#ff5631] ">
                    Customized Company Systems :{" "}
                  </span>{" "}
                  Tailored tech solutions for streamlined operations.
                </div>
                <div className=" text-[14px] ">
                  <span className=" text-[#ff5631] mb-[5px] ">
                    Mobile Mastery:{" "}
                  </span>{" "}
                  Harness the power of mobile apps for enhanced accessibility.
                </div>
              </div>
            </div>
          </div>

          {/* -----estTwo----- */}
          <div
            className=" flex flex-col border border-[#ff5631] rounded-sm mt-[20px]"
            onClick={() => setEstTwo(!estTwo)}
          >
            <div
              className={` py-[10px] px-[8px] uppercase text-[14px] font-semibold flex justify-between ${
                !estTwo ? " bg-[#ff5631] " : " bg-white "
              } `}
            >
              <span>2. Brand Brilliance Boosters:</span>
              <span className="  ">
                <FontAwesomeIcon
                  icon={estTwo ? faChevronUp : faChevronDown}
                  className={` ${!estTwo ? "text-white" : "text-[#ff5631]"} `}
                />
              </span>
            </div>
            <div
              className={` ${
                estTwo ? "flex flex-col px-[8px] pb-[10px]" : "hidden"
              } `}
            >
              <div className=" font-light text-[18px] flex flex-col ">
                <div className=" text-[14px] mb-[2px] mt-[5px] ">
                  <span className=" text-[#ff5631] ">Web Wizardry: </span>{" "}
                  Elevate your online presence with stunning and effective
                  websites.
                </div>
                <div className=" text-[14px] ">
                  <span className=" text-[#ff5631] mb-[5px] ">
                    SEO Sorcery:{" "}
                  </span>{" "}
                  Propel your brand to the top and stand out in the digital
                  realm.
                </div>
              </div>
            </div>
          </div>

          {/* -----estThree----- */}
          <div
            className=" flex flex-col border border-[#ff5631] rounded-sm mt-[20px]"
            onClick={() => setEstThree(!estThree)}
          >
            <div
              className={` py-[10px] px-[8px] uppercase text-[14px] font-semibold flex justify-between ${
                !estThree ? " bg-[#ff5631] " : " bg-white "
              } `}
            >
              <span>3. Profit Fast, Profit Smart:</span>
              <span className="  ">
                <FontAwesomeIcon
                  icon={estThree ? faChevronUp : faChevronDown}
                  className={` ${!estThree ? "text-white" : "text-[#ff5631]"} `}
                />
              </span>
            </div>
            <div
              className={` ${
                estThree ? "flex flex-col px-[8px] pb-[10px]" : "hidden"
              } `}
            >
              <div className=" font-light text-[18px] flex flex-col ">
                <div className=" text-[14px] mb-[2px] mt-[5px] ">
                  <span className=" text-[#ff5631] ">Strategic Alliances </span>{" "}
                  Join forces with us for innovative and profitable
                </div>
                <div className=" text-[14px] ">
                  <span className=" text-[#ff5631] mb-[5px] ">
                    Profit Accelerators:{" "}
                  </span>{" "}
                  Expert strategies to boost profitability and market presence.
                </div>
              </div>
            </div>
          </div>

          <div className=" font-light text-[14px] mt-[20px] mb-[10px] ">
            Join the league of successful businesses partnering with{" "}
            <span className=" font-bold ">Swift</span>
            <span className=" font-bold text-[#ff5631] ">Nex</span>
            <span className="font-bold"> Tech</span> - where simplicity meets
            sophistication, and excellence is our standard.
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

import React from "react";
import Image from "next/image";
const Trending = () => {
  return (
    <div className=" m-auto max-w-7xl pt-32">
      <h1 className="flex justify-between items-center">
        <p className="text-[40px] font-[700]">Trending Art 🔥</p>
        <p className="cursor-pointer text-[15px] font-[700]">Discover more</p>
        {/* test */}
      </h1>
      <div className="pt-[33px] flex gap-[67px]">
        <div
          className="cursor-pointer w-[290px] h-[400px] bg-[#fff] shadow-lg

         rounded-[11.426px] dark:bg-[#1F1F1F] duration-200"
        >
          <div className="w-[100%] h-[277.07px] flex justify-center pt-[7px]">
            <Image
              src={"/Rectangle 275.png"}
              width={267.09}
              height={277.07}
              objectFit="cover"
              // layout="fill"
              alt="carousel"
              // priority
              quality={100}
              className="mt-1"
            />
          </div>
          <div className="w-[259.09px] flex mx-auto pt-[13px]">
            <h3 className="text-[18px] font-[700]">ExBoot #1</h3>
          </div>
          <div className="w-[259.09px] mx-auto pt-[10px] flex items-center justify-between">
            <div className="flex items-center mt-[10px] gap-[10px]">
              <Image
                className=""
                src={"/Ellipse 28.png"}
                width={38}
                height={38}
                objectFit="cover"
                // layout="fill"
                alt="carousel"
                // priority
                quality={100}
              />
              <span className="text-[15px] font-[700]">Perperzon</span>
            </div>
            <div className="">
              <span className="text-[12px] text-[#6B6B6B] font-[400]">
                Current Bid
              </span>
              <h5 className="text-[15px] font-[700] flex items-center gap-[6px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="16"
                  viewBox="0 0 11 16"
                  fill="none"
                >
                  <g clip-path="url(#clip0_14_1902)">
                    <path
                      d="M9.83628 7.73997L5.20073 10.4933L0.562134 7.73997L5.20073 0.00219727L9.83628 7.73997ZM5.20073 11.3774L0.562134 8.62412L5.20073 15.1929L9.83933 8.62412L5.20073 11.3774Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_14_1902">
                      <rect
                        width="9.76547"
                        height="15.1907"
                        fill="white"
                        transform="translate(0.317505 0.00219727)"
                      />
                    </clipPath>
                  </defs>
                </svg>{" "}
                3.421
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;

import React from "react";
import Image from "next/image";
const Trending = () => {
    return (
        <div className="w-[1246px] mx-auto pt-[135px]">
            <h1 className="flex justify-between items-center">
                <p className="text-[40px] font-[700]">Trending Art 🔥</p>
                <p className="text-[15px] font-[700]">Discover more</p>
                {/* test */}
            </h1>
            <div className="pt-[33px]">
            <div className="w-[290px] h-[400px] bg-[#fcfcfc] shadow-[0px 4.57051px 54.84612px 0px rgba(197, 197, 197, 0.25)] rounded-[11.426px] dark:bg-[#1F1F1F]">
                <div className="w-[100%] h-[277.07px] flex justify-center pt-[7px]">
                <Image
        src={"/Rectangle 275.png"}
        width={267.09}
        height={277.07}
        objectFit="cover"
        // layout="fill"
        alt="carousel"
        // priority
        quality="100"
      />
                </div>
                <div className="w-[259.09px] flex mx-auto pt-[13px]">
                    <h3 className="text-[18px] font-[700]">ExBoot #1</h3>
                </div>
                <div className="w-[259.09px] mx-auto pt-[10px] flex items-center justify-between">
                    <div className="flex items-center gap-[10px]">
                    <Image className="rounded-[50%]"
        src={"/Ellipse 28.png"}
        width={38}
        height={38}
        objectFit="cover"
        // layout="fill"
        alt="carousel"
        // priority
        quality="100"
      />
      <span className="text-[15px] font-[700]">Perperzon</span>
                    </div>
                    <div className="">
                        <span className="text-[12px] text-[#6B6B6B] font-[400]">Current Bid</span>
                        <h5 className="text-[15px] font-[700]">3.421</h5>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Trending;
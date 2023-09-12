import React from "react";
import Image from "next/image";
import HeroMainImg from "./HeroMainImg.js";

const Hero = () => {
  return (
    <div className="container max-w-screen-xl mx-auto p-[15px] pt-[90px] flex">
      <div className="w-1/2">
        <span className="text-[13.535px] font-normal text-[#6B6B6B] tracking-[4.196px] leading-6">
          WEB 3 NON-FUNGIBLE TOKENS
        </span>
        <h1 className="font-clash text-[68.892px] leading-[84.5px] text-black mg-[12px] duration-200 dark:text-white dark:duration-200">
          Unlock Unique Digital Ownership with NFTs
        </h1>
        <p className="text-[24px] leading-[42.5px] mt-[30px] text-[#6B6B6B] duration-200 dark:text-[#F4F4F4] dark:duration-200">
          Experience the Revolutionary World of Non-Fungible Tokens on Our
          Exclusive NFT Marketplace
        </p>
        <button className="flex mt-[55.57px] bg-gradient-to-r from-[#FF56BB] to-[#FF8F77] justify-center items-center gap-[16px] w-[284px] h-[63px] rounded-[20px] duration-300 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
          >
            <path
              d="M0.111329 3.08507C0.111329 2.51796 0.331607 1.97408 0.723703 1.57307C1.1158 1.17206 1.6476 0.946777 2.2021 0.946777H12.4659C13.0204 0.946777 13.5522 1.17206 13.9443 1.57307C14.3364 1.97408 14.5567 2.51796 14.5567 3.08507V4.06324C15.2784 4.11256 15.9547 4.44055 16.4488 4.9808C16.9429 5.52104 17.2177 6.23315 17.2177 6.97287V15.1373C17.2177 15.9106 16.9173 16.6523 16.3826 17.1991C15.8479 17.7459 15.1228 18.0531 14.3666 18.0531H2.96543C2.20928 18.0531 1.4841 17.7459 0.949425 17.1991C0.414749 16.6523 0.11437 15.9106 0.11437 15.1373V6.97287H0.111329V3.27946H0.119692C0.114058 3.21482 0.111268 3.14996 0.111329 3.08507ZM13.4163 3.08507C13.4163 2.54855 12.9905 2.11312 12.4659 2.11312H2.2021C1.95005 2.11312 1.70833 2.21552 1.5301 2.3978C1.35188 2.58007 1.25175 2.82729 1.25175 3.08507C1.25175 3.34285 1.35188 3.59007 1.5301 3.77234C1.70833 3.95462 1.95005 4.05702 2.2021 4.05702H13.4163V3.08507ZM12.0858 11.0551C11.9345 11.0551 11.7895 11.1165 11.6826 11.2259C11.5756 11.3352 11.5156 11.4836 11.5156 11.6382C11.5156 11.7929 11.5756 11.9412 11.6826 12.0506C11.7895 12.16 11.9345 12.2214 12.0858 12.2214H13.9865C14.1377 12.2214 14.2827 12.16 14.3897 12.0506C14.4966 11.9412 14.5567 11.7929 14.5567 11.6382C14.5567 11.4836 14.4966 11.3352 14.3897 11.2259C14.2827 11.1165 14.1377 11.0551 13.9865 11.0551H12.0858Z"
              fill="white"
            />
          </svg>{" "}
          Connect Wallet
        </button>
      </div>
      <div className="w-1/2 bg-lime-600 flex items-center justify-center">
        <HeroMainImg />
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import Image from "next/image";
import whiteHeroImg from "public/whiteHeroImg.png";

const HeroMainImg = () => {
  return (
    <div className="flex justify-center items-center">
      <Image
        src={"/whiteHeroImg.png"}
        width={600}
        height={600}
        objectFit="cover"
        // layout="fill"
        alt="carousel"
        // priority
        quality="100"
      />
    </div>
  );
};

export default HeroMainImg;

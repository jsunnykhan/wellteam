import Image from "next/image";
import React from "react";
import ChallengeLeftSection from "./ChallengeLeft";

function Challenge() {
  return (
    <div id="challenge" className="pl-[10%] relative">
      <div className="w-[45%] lg:w-[40%] left-0 top-0">
        <ChallengeLeftSection />
      </div>

      <div className="absolute right-0 top-20 w-[40%]">
        <Image
          src="/4.jpg"
          alt="travel world"
          width={500}
          height={350}
          layout="responsive"
        />
        <div className="absolute w-full h-full top-0 right-0 bottom-0 left-0 bg-black opacity-30"></div>
      </div>
    </div>
  );
}

export default Challenge;

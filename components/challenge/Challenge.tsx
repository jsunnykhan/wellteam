import Image from "next/image";
import React from "react";
import ChallengeLeftSection from "./ChallengeLeft";

function Challenge() {
  return (
    <div
      id="challenge"
      className="w-4/5 grid grid-cols-2 mx-auto items-center space-x-5"
    >
      <ChallengeLeftSection />
      <div className="relative h-min items-center">
        <Image
          src="/challenge.jpg"
          alt="travel world"
          width={500}
          height={420}
          layout="fixed"
        />
        <div className="absolute w-full h-full top-0 bg-black opacity-30"></div>
      </div>
    </div>
  );
}

export default Challenge;

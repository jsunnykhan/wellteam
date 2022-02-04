import Image from "next/image";
import React from "react";
import ChallengeLeftSection from "./ChallengeLeft";

function Challenge() {
  return (
    <div id="challenge" className="h-screen flex my-auto items-center justify-between space-x-5">
      <ChallengeLeftSection />
      <div className="relative h-min">
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

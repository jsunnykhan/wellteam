import Image from "next/image";
import React from "react";

function Challenge() {
  return (
    <div className="h-screen flex my-auto justify-between items-center">
      <section>
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white">
          Fit clam clean <br />
          strong together
        </h1>
        <p className="text-white mt-5 font-medium">
          Everyone who has completed all the steps will get a badge when the
          program ends.
        </p>
      </section>
      <section className=" w-1/2">
        <Image
          src="/skating_buddy.jpg"
          alt="Skating"
          layout="fixed"
          width={400}
          height={400}
        />
      </section>
    </div>
  );
}

export default Challenge;

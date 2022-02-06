import Image from "next/image";
import React from "react";
import ButtonComponent from "../common/ButtonComponent";
import Banner from "./Banner";
import GalleryComponent from "./GalleryComponent";

function Programs() {
  return (
    <div className="py-20 space-y-20 w-4/5 mx-auto">
      <div className="flex justify-between items-center ">
        <div className="space-y-4">
          <h3>
            {`Join now ,where you are,`}
            <br /> {` with what you've got.`}
          </h3>
          <p>Join today, take on a challenge and optimise your life.</p>
        </div>
        <div className="flex gap-3">
          <ButtonComponent
            title="Get in touch"
            bg_color="bg-primaryLight"
            url="/arrowwhite.svg"
          />
          <ButtonComponent
            title="Join us"
            bg_color="bg-secondary"
            url="/arrowwhite.svg"
          />
        </div>
      </div>

      <GalleryComponent />
      <Banner />
    </div>
  );
}

export default Programs;

import Image from "next/image";
import React from "react";
import ButtonComponent from "../common/ButtonComponent";
import Banner from "./Banner";
import GalleryComponent from "./GalleryComponent";
import { title } from "process";
import Headline from "../common/Headline";

function Programs() {
  return (
    <div className="py-20 space-y-20 w-4/5 mx-auto">
      
      <Headline
        title={`Join now, where you are, with what you've got.`}
        subTitle="Join today, take on a challenge and optimise your life."
        btn1={{ title: "Get in touch", bg_color: "bg-primaryLight" }}
        btn2={{ title: "Join us", bg_color: "bg-secondary" }}
      />

      <GalleryComponent />
    </div>
  );
}

export default Programs;

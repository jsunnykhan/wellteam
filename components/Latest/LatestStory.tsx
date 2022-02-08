import Image from "next/image";
import React from "react";
import Headline from "./../common/Headline";

function LatestStory() {
  return (
    <div className="h-screen w-4/5 mx-auto items-center space-x-5">
      <Headline
        title={`Our Latest Stories`}
        subTitle="What's new? Our blog and news."
        btn1={{ title: "Take a Challenges", bg_color: "bg-primaryLight" }}
        btn2={{ title: "Join us", bg_color: "bg-secondary" }}
      />

      <div className="grid grid-cols-2 grid-rows-2 gap-10">
        <div className="row-span-2 bg-slate-300 px-10 py-5">
        <Image
          className="rounded-2xl"
          src="/1.jpg"
          alt="Nice picture "
          width={500}
          height={400}
         
        />
        </div>
        <div className=" bg-yellow-300 px-10 py-10">
          <h1>dsbhdjgahjgsdhj</h1>
        </div>
        <div className="bg-purple-300 px-10 py-10">
          <h1>dsbhdjgahjgsdhj</h1>
        </div>
      </div>
    </div>
  );
}

export default LatestStory;

import Image from "next/image";
import React from "react";
import ListItem from "./ListItem";

const guideList = {
  left: [
    {
      id: 1,
      title: "Eliminate brain fog and gain clarity for decision making.",
    },
    {
      id: 2,
      title:
        "Get the doctor/your partner/kids off your back and optimise your health.",
    },
    {
      id: 3,
      title:
        "Improve your fitness so you can push harder for longer & feel strong and invincible again.",
    },
  ],
  right: [
    { id: 1, title: "Regain focus & drive by defining your purpose." },
    { id: 2, title: "Boost your energy & surround yourself with good men." },
    {
      id: 3,
      title:
        "Maximise performance by exploring how the food you eat could be holding you back.",
    },
    { id: 4, title: "Belong to an exclusive, positive, global team." },
  ],
};

function ChallengeGuide() {
  return (
    <div className="h-screen py-2 mb-20">
      <div className="h-2/3 relative">
        <Image src="/bg2.jpg" layout="fill" alt="Leafs" objectFit="cover" />
        <div className="absolute bg-black w-full h-full opacity-60"></div>
        <h3 className="absolute left-32 bottom-10 w-1/2 mx-auto ">
          {"Take on a challenge & optimise your life."}
        </h3>

        <div className="bg-primaryLight w-3/6 h-2/3 absolute right-0 -bottom-52 px-6 py-14">
          <div className="w-4/5 space-y-4">
            {guideList.right.map((data) => (
              <ListItem key={data.id} title={data.title} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex w-4/5 mx-auto mt-14 space-y-3">
        <div className="w-5/12 space-y-4">
          {guideList.left.map((data) => (
            <ListItem key={data.id} title={data.title} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChallengeGuide;

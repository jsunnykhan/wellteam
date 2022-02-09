import Image from "next/image";
import React from "react";
import Post from "../post/Post";
import ProfileCard from "../profile/ProfileCard";
import Headline from "./../common/Headline";

const LatestStoryData = [
  {
    title: "The office is dead-long live the creative powerhouse",
    subTitle:
      "The act of climbing on a versaClimber not only makes you strong.but also reinforces better moving patterns while working against gravity.The motion on the versaClimber build.",
    image_url: "/1.jpg",
  },
  {
    title: "The evidence behind cold water showers",
    subTitle:
      "It seems that everything old is new again and that's the case when it comes to subjecting",
    image_url: "/3.jpg",
  },
  {
    title: "how to finish your year well",
    subTitle:
      "As we approach the end of another year, it's often time for reflection, a few drinks and a...",
    image_url: "/4.jpg",
  },
];

function LatestStory() {
  console.log(LatestStoryData[0]);
  return (
    <div className="w-4/5 mx-auto items-center space-y-10">
      <Headline
        title={`Our Latest Stories`}
        subTitle="What's new? Our blog and news."
        btn1={{ title: "Take a Challenges", bg_color: "bg-primaryLight" }}
        btn2={{ title: "Join us", bg_color: "bg-secondary" }}
      />

      <div className="grid grid-cols-2 grid-rows-2 gap-x-5 gap-y-10">
        <div className="row-span-2">
          <div className="space-y-5">
            <Image
              className="rounded-2xl"
              src={LatestStoryData[0].image_url}
              alt="Nice picture"
              width={500}
              height={670}
            />
            <div className="space-y-2">
              <h4>{LatestStoryData[0].title}</h4>
              <p>{LatestStoryData[0].subTitle}</p>
            </div>

            <ProfileCard />
          </div>
        </div>

        <div className="row-span-1 ">
          <div className="space-y-5">
            <Image
              className="rounded-2xl"
              src={LatestStoryData[1].image_url}
              alt="Nice picture"
              width={500}
              height={250}
            />
            <div className="space-y-2">
              <h4>{LatestStoryData[1].title}</h4>
              <p>{LatestStoryData[1].subTitle}</p>
            </div>

            <ProfileCard />
          </div>
        </div>

        <div className="row-span-1 ">
          <div className="space-y-5">
            <Image
              className="rounded-2xl"
              src={LatestStoryData[2].image_url}
              alt="Nice picture"
              width={500}
              height={250}
            />
            <div className="space-y-2">
              <h4>{LatestStoryData[2].title}</h4>
              <p>{LatestStoryData[2].subTitle}</p>
            </div>

            <ProfileCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestStory;

import Image from "next/image";
import React from "react";
import Post from "../post/Post";
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

      <div className="w-full h-96 grid grid-cols-2 grid-rows-2 gap-2">
        <div className="row-span-2 bg-white">
          <Post
            title={LatestStoryData[0].title}
            subTitle={LatestStoryData[0].subTitle}
            image_url={LatestStoryData[0].image_url}
          />
        </div>

        <div className="row-span-1 bg-slate-400">
          {/* <Post
            title={LatestStoryData[1].title}
            subTitle={LatestStoryData[1].subTitle}
            image_url={LatestStoryData[1].image_url}
          /> */}
        </div>

        <div className="row-span-1 bg-red-400">
          {/* <Post
            title={LatestStoryData[2].title}
            subTitle={LatestStoryData[2].subTitle}
            image_url={LatestStoryData[2].image_url}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default LatestStory;

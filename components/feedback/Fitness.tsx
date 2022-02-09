import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import FitnessGrid from "./FitnessGrid";

const fitnessData = [
  {
    _id: 1,
    image_url: "/fitness/climbing.jpg",
    title: "Fun than any nightclub you'll ever go to, promise.",
    tag: ["#Repost", "#thelifeofsoreilly"],
    id: "@risenationau",
    comments: [
      { id: "1", comment: "a" },
      { id: "2", comment: "a" },
      { id: "3", comment: "a" },
      { id: "4", comment: "a" },
      { id: "5", comment: "a" },
      { id: "6", comment: "a" },
      { id: "7", comment: "a" },
      { id: "8", comment: "a" },
      { id: "9", comment: "a" },
      { id: "10", comment: "a" },
      { id: "11", comment: "a" },
      { id: "12", comment: "a" },
      { id: "13", comment: "a" },
      { id: "14", comment: "a" },
      { id: "15", comment: "a" },
      { id: "16", comment: "a" },
      { id: "18", comment: "a" },
    ],
    like: 100,
  },
  {
    _id: 2,
    image_url: "/fitness/mountain.jpg",
    title: "Fun than any nightclub you'll ever go to, promise.",
    tag: ["#Repost", "#thelifeofsoreilly"],
    id: "@risenationau",
    comments: [
      { id: "1", comment: "a" },
      { id: "2", comment: "a" },
      { id: "3", comment: "a" },
      { id: "4", comment: "a" },
      { id: "5", comment: "a" },
      { id: "6", comment: "a" },
      { id: "7", comment: "a" },
      { id: "8", comment: "a" },
      { id: "9", comment: "a" },
      { id: "10", comment: "a" },
      { id: "11", comment: "a" },
      { id: "12", comment: "a" },
      { id: "13", comment: "a" },
      { id: "14", comment: "a" },
      { id: "15", comment: "a" },
      { id: "16", comment: "a" },
      { id: "18", comment: "a" },
    ],
    like: 100,
  },
  {
    _id: 3,
    image_url: "/fitness/ice.jpg",
    title: "Fun than any nightclub you'll ever go to, promise.",
    tag: ["#Repost", "#thelifeofsoreilly"],
    id: "@risenationau",
    comments: [
      { id: "1", comment: "a" },
      { id: "2", comment: "a" },
      { id: "3", comment: "a" },
      { id: "4", comment: "a" },
      { id: "5", comment: "a" },
      { id: "6", comment: "a" },
      { id: "7", comment: "a" },
      { id: "8", comment: "a" },
      { id: "9", comment: "a" },
      { id: "10", comment: "a" },
      { id: "11", comment: "a" },
      { id: "12", comment: "a" },
      { id: "13", comment: "a" },
      { id: "14", comment: "a" },
      { id: "15", comment: "a" },
      { id: "16", comment: "a" },
      { id: "18", comment: "a" },
    ],
    like: 100,
  },
  {
    _id: 4,
    image_url: "/fitness/outdoor.jpg",
    title: "Fun than any nightclub you'll ever go to, promise.",
    tag: ["#Repost", "#thelifeofsoreilly"],
    id: "@risenationau",
    comments: [
      { id: "1", comment: "a" },
      { id: "2", comment: "a" },
      { id: "3", comment: "a" },
      { id: "4", comment: "a" },
      { id: "5", comment: "a" },
      { id: "6", comment: "a" },
      { id: "7", comment: "a" },
      { id: "8", comment: "a" },
      { id: "9", comment: "a" },
      { id: "10", comment: "a" },
      { id: "11", comment: "a" },
      { id: "12", comment: "a" },
      { id: "13", comment: "a" },
      { id: "14", comment: "a" },
      { id: "15", comment: "a" },
      { id: "16", comment: "a" },
      { id: "18", comment: "a" },
    ],
    like: 100,
  },
  {
    _id: 5,
    image_url: "/fitness/bonfire.jpg",
    title: "Fun than any nightclub you'll ever go to, promise.",
    tag: ["#Repost", "#thelifeofsoreilly"],
    id: "@risenationau",
    comments: [
      { id: "1", comment: "a" },
      { id: "2", comment: "a" },
      { id: "3", comment: "a" },
      { id: "4", comment: "a" },
      { id: "5", comment: "a" },
      { id: "6", comment: "a" },
      { id: "7", comment: "a" },
      { id: "8", comment: "a" },
      { id: "9", comment: "a" },
      { id: "10", comment: "a" },
      { id: "11", comment: "a" },
      { id: "12", comment: "a" },
      { id: "13", comment: "a" },
      { id: "14", comment: "a" },
      { id: "15", comment: "a" },
      { id: "16", comment: "a" },
      { id: "18", comment: "a" },
    ],
    like: 100,
  },
];

function Fitness() {
  return (
    <div className="w-4/5 mx-auto items-center space-y-16">
      <div className="lg:flex justify-between items-center space-y-1 0 lg:space-y-0 h-max">
        <div className="max-w-xl space-y-6">
          <h2>{"Let's be friends, Share your Feels with"}</h2>
          <p>{"We are the only choice for fitness"}</p>
        </div>
        <div
          onClick={() => {}}
          className={`flex rounded-full items-center bg-secondary h-12 px-6 py-2 cursor-pointer space-x-3`}
        >
          <FontAwesomeIcon icon={faHeart} width={30} height={30} />
          <button
            type="button"
            className={`font-serif font-bold whitespace-nowrap text-lg`}
          >
            {"Follow us on Instagram"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4">
        {fitnessData.map((data) => (
          <FitnessGrid key={data._id} data={data} />
        ))}
      </div>
    </div>
  );
}

export default Fitness;

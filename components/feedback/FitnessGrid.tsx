import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComments } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { AppProps } from "next/app";
import { type } from "os";

interface comments {
  id: string;
  comment: string;
}

interface fitnessDataProps {
  title: string;
  image_url: string;
  tag: string[];
  id: string;
  comments: comments[];
  like: number;
}

function FitnessGrid(props: { data: fitnessDataProps }) {
  const { image_url, title, tag, id, comments, like } = props.data;
  return (
    <div className="relative group cursor-pointer">
      <Image
        className="rounded-lg"
        src={image_url}
        alt="asd"
        width={600}
        height={650}
        layout="responsive"
        objectFit="cover"
      />
      <div className="invisible group-hover:visible">
        <div className="absolute rounded-lg flex flex-col py-5 m-auto space-y-3 justify-end items-center text-center top-0 h-full w-full bg-black opacity-75">
          <div className="flex justify-center space-x-4">
            <div className="flex space-x-1 items-center font-medium">
              <FontAwesomeIcon icon={faComments} />
              <p>{comments.length}</p>
            </div>
            <div className="flex space-x-1 items-center font-medium">
              <FontAwesomeIcon icon={faHeart} />
              <p>{like}</p>
            </div>
          </div>
          <div className="flex overflow-x-hidden">
            {tag.map((data) => (
              <p key={data} className="text-sm mr-1 text-secondary">
                {data}
              </p>
            ))}
          </div>
          <p className="text-sm">{title}</p>
          <p className="text-sm text-secondary font-bold">{id}</p>
        </div>
      </div>
    </div>
  );
}

export default FitnessGrid;

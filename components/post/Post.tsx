import Image from "next/image";
import { type } from "os";
import React from "react";
import ProfileCard from "../profile/ProfileCard";
interface ProfileCardData {
  name: string;
  date: string;
  duration: number;
  profile_url?: string;
}

type PostData = {
  image_url: string;
  title: string;
  subTitle: string;
};

function Post(props: PostData) {
  const { title, subTitle, image_url } = props;
  return (
    <div className="space-y-5">
      <Image
        className="rounded-2xl"
        src={image_url}
        alt="Nice picture"
        width={500}
        height={400}
        
      />
      <div className="space-y-5">
        <h4>{title}</h4>
        <p>{subTitle}</p>
      </div>

      <ProfileCard />
    </div>
  );
}

export default Post;

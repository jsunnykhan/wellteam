import Image from "next/image";
import React from "react";

function TwitterCard() {
  return (
    <div>
      <div className="flex space-x-5 items-center">
        <Image
          className="rounded-xl"
          src="/dummy.jpg"
          alt="profile_pic"
          width={40}
          height={40}
          layout="fixed"
          objectFit="cover"
        ></Image>

        <div>
          <p className="font-serif text-lg capitalize font-bold">Olivia ava</p>
          <p className="text-sm text-gray-500">@jsuunykhan</p>
        </div>
      </div>
    </div>
  );
}

export default TwitterCard;

import Image from "next/image";
import React from "react";
import { title } from "process";

interface contextProps {
  data: { title: string; type: any };
  index: number;
}

function RadioButtonContext({ data, index }: contextProps) {
  return (
    <div className="w-max">
      <div className="flex gap-10 p-10">
        <div className="self-end">
          <Image
            src="/happy.svg"
            width={150}
            height={150}
            layout="fixed"
            alt="Gift teamwell"
          />
        </div>

        <div className="space-y-10">
          <h1 className="text-gray-500 italic">{`0${index}`}</h1>
          <h2 className="truncate">{data.title}</h2>

          <p>
            Follow step-by-step challenges to optimise your mind, body, health,
            purpose,social interactions and diet.
          </p>
          <p>{`No crystales,no coffee enema's and no BS.Most challenges are free for members. Get tips,tools and tricks that work that you   can implement today.`}</p>
        </div>
      </div>
    </div>
  );
}

export default RadioButtonContext;

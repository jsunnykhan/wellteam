import Image from "next/image";
import React, { HtmlHTMLAttributes } from "react";

interface buttonProps {
  title: string;
  bg_color: string;
  url: string;
  text_color?: string;
  onClickHandler?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
}
function ButtonComponent(props: buttonProps) {
  const { title, bg_color, url, text_color, onClickHandler } = props;
  return (
    <div
      onClick={onClickHandler}
      className={`flex rounded-full ${bg_color} h-12  px-6 py-2 cursor-pointer`}
    >
      <button
        type="button"
        className={`font-serif ${text_color} font-bold whitespace-nowrap text-lg`}
      >
        {title}
      </button>
      <div className="ml-2 mt-1">
        <Image src={url} alt={title} width={30} height={20} layout="fixed" />
      </div>
    </div>
  );
}

export default ButtonComponent;

import { AppProps } from "next/app";
import React from "react";

interface buttonProps {
  title: string;
  bg_color: string;
  text_color: string;
  isArrow: boolean;
}

function ButtonComponent(props: buttonProps) {
  const { title, bg_color, isArrow } = props;
  return (
    <div className={`rounded-full ${bg_color}px-7 py-2 cursor-pointer`}>
      <button className="font-serif font-bold text-lg">{title}</button>
      {isArrow ? <p>ok</p> : null}
    </div>
  );
}

export default ButtonComponent;

import React from "react";
import ButtonComponent from "./ButtonComponent";

interface buttonProps {
  title: string;
  bg_color: string;
  url?: string;
  text_color?: string;
  onClickHandler?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
}

interface headingProps {
  title: string;
  subTitle: string;
  btn1: buttonProps;
  btn2: buttonProps;
}

function Headline(props: headingProps) {
  const { title, subTitle, btn1, btn2 } = props;

  return (
    <div className="lg:flex justify-between items-center space-y-1 0 lg:space-y-0 h-max">
      <div className="max-w-xl space-y-6">
        <h2>{title}</h2>
        <p>{subTitle}</p>
      </div>
      <div className="flex gap-5">
        <ButtonComponent
          title={btn1.title}
          bg_color={btn1.bg_color}
          url="/arrowwhite.svg"
        />
        <ButtonComponent
          title={btn2.title}
          bg_color={btn2.bg_color}
          url="/arrowwhite.svg"
        />
      </div>
    </div>
  );
}

export default Headline;

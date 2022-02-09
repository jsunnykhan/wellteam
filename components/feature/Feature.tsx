import Image from "next/image";
import React, { useState } from "react";
import RadioButton from "./RadioButton";
import RadioButtonContext from "./RadioButtonContext";

enum ButtonType {
  ONLINE,
  COMMUNITY,
  LIFE,
}

const radioButtonData = [
  {
    title: "Online member",
    type: ButtonType.ONLINE,
  },
  {
    title: "Members Community",
    type: ButtonType.COMMUNITY,
  },
  {
    title: "For a better life",
    type: ButtonType.LIFE,
  },
];

function Feature() {
  const [activeButton, setActiveButton] = useState<ButtonType>(
    ButtonType.ONLINE
  );
  const onRadioButtonHandler = (btnType: ButtonType) => {
    if (btnType === ButtonType.ONLINE) {
      setActiveButton((active) => (active = ButtonType.ONLINE));
    } else if (btnType === ButtonType.COMMUNITY) {
      setActiveButton((active) => (active = ButtonType.COMMUNITY));
    } else if (btnType === ButtonType.LIFE) {
      setActiveButton((active) => (active = ButtonType.LIFE));
    }
  };
  return (
    <div
      className="bg-primaryLight py-14 md:py-24 overflow-hidden"
      id="program"
    >
      <div className="text-center space-y-5">
        <h2>Ready to get Started?</h2>
        <p>
          Follow step-by-step challenges to optimise your mind, body, health,
          purpose,social interactions and diet.
        </p>

        <div className="flex mx-auto justify-center space-x-4">
          {radioButtonData.map((data) => (
            <RadioButton
              key={data.title}
              data={data}
              onRadioButtonHandler={onRadioButtonHandler}
              activeButton={activeButton}
            />
          ))}
        </div>
      </div>

      {/* Start Here */}

      <div className="pl-[10%]">
        <div
          className="flex transition-all duration-200 ease-in-out"
          style={{
            width: "210vw",
            transform: `translateX(${-70 * activeButton}vw)`,
          }}
        >
          {radioButtonData.map((data, index) => (
            <RadioButtonContext
              key={data.title}
              data={data}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feature;

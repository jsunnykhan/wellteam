import React from 'react';
import { title } from 'process';

enum ButtonType {
    ONLINE,
    COMMUNITY,
    LIFE,
  }

  interface radiobuttonProps{
    data:{title:string ,type:ButtonType},
    onRadioButtonHandler : (t : ButtonType)=>void,
    activeButton:ButtonType

  }
  
function RadioButton(props:radiobuttonProps) {

    const {data , onRadioButtonHandler ,activeButton} = props;
    return <div className="flex items-center space-x-2">
    <div
      className={activeButton === data.type
        ? "w-5 h-5 rounded-md bg-white"
        : "w-5 h-5 rounded-md bg-gray-400 "}
      onClick={() => onRadioButtonHandler(data.type)}
    ></div>
    <p
      className={activeButton === data.type
        ? "text-white"
        : "text-gray-500"}
    >
      {data.title}
    </p>
  </div>;
}


export default RadioButton;

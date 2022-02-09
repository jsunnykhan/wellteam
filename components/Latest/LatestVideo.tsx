import React from "react";
import ButtonComponent from "../common/ButtonComponent";
import Headline from "../common/Headline";

function LatestVideo() {
  return (
    <div className="py-4 w-4/5 mx-auto grid grid-rows-2">
      <Headline
        title={`Our Latest Video's`}
        subTitle="Join now, where you are, with what you've got."
        btn1={{ title: "Take a Challenges", bg_color: "bg-primaryLight" }}
        btn2={{ title: "Join us", bg_color: "bg-secondary" }}
      />
      

      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-x-5">
        <iframe
          className="rounded-lg"
          
          src="https://www.youtube.com/embed/tHlxXVXwn7g"
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/ADNgEHFDYzo"
          className="rounded-md"
          
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/AivyFZXT2ek"
          className="rounded-md"
          
        ></iframe>
      </div>
    </div>
  );
}

export default LatestVideo;

import React from "react";
import ButtonComponent from "../common/ButtonComponent";

function ChallengeLeftSection () {
  const onTakeChallengeHandler = (e: any) => {
    console.log("Take a Challenge");
  };
  const onJoinUsHandler = (e: any) => {
    console.log("Join us");
  };
  return (
    <div className="space-y-8">
      <h1 className="font-serif text-5xl sm:text-6xl">
        Brand Discovery
        <br />
        that sticks.
      </h1>
      <p>
        Exclusive, online, guided challenges, members-only community and
        database of powerful life hacks. We are building a global team of one
        million happier, healthier men.
      </p>
      <p>
        Wellteam Challenges will guide you through a structured program of
        proven life hacks.
      </p>
      <p>
        Join a team or solo challenge. The Wellteam community is here to support
        you with an online forum, Strava Club, Facebook group, weekly check-ins
        and online and offline sessions.
      </p>

      <h3 className="font-serif text-2xl">
        Join today, take on a challenge and optimise your life.
      </h3>

      <div className="flex space-x-5">
        <ButtonComponent
          title="Take a Challenges"
          bg_color="bg-primaryLight"
          url="/arrowwhite.svg"
          onClickHandler={onTakeChallengeHandler}
        />
        <ButtonComponent
          title="Join Us"
          bg_color="bg-secondary"
          url="/arrowwhite.svg"
          onClickHandler={onJoinUsHandler}
        />
      </div>
    </div>
  );
}

export default ChallengeLeftSection ;

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import ButtonComponent from "../common/ButtonComponent";

function HomePage() {
  const onTakeChallengeHandler = (e: any) => {
    console.log("Take a Challenge");
  };
  const onJoinUsHandler = (e: any) => {
    console.log("Join us");
  };

  return (
    <div
      id="home"
      className="h-screen flex mx-auto justify-between items-center py-4 w-4/5 "
    >
      <section className="space-y-20">
        <div>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl">
            Fit clam clean <br />
            strong together
          </h1>
          <p className="text-white mt-5 font-medium">
            Everyone who has completed all the steps will get a badge when the
            program ends.
          </p>
        </div>

        <div className="flex mt-10 space-x-5">
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

        <div className="flex gap-4 items-center">
          <FontAwesomeIcon
            size="lg"
            className="text-white "
            icon={faInstagram}
          />
          <FontAwesomeIcon
            size="lg"
            className="text-white"
            icon={faFacebookF}
          />
          <FontAwesomeIcon
            size="lg"
            className="text-white"
            icon={faLinkedinIn}
          />
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon
              size="2x"
              className="text-white"
              icon={faYoutube}
            />
            <p className="text-gray-400">How it works?</p>
          </div>
        </div>
      </section>
      <section className=" w-1/2">
        <Image
          src="/skating_buddy.jpg"
          alt="Skating"
          layout="fixed"
          width={400}
          height={400}
          priority={true}
        />
      </section>
    </div>
  );
}

export default HomePage;

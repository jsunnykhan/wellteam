import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faInstagram,
  faFacebookF,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Challenge() {
  return (
    <div id="challenge" className="h-screen flex mx-auto justify-between items-center">
      <section className="space-y-20">
        <div>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white">
            Fit clam clean <br />
            strong together
          </h1>
          <p className="text-white mt-5 font-medium">
            Everyone who has completed all the steps will get a badge when the
            program ends.
          </p>
        </div>

        <div className="flex mt-10">
          <div
            onClick={() => console.log("Take a challenge")}
            className="flex rounded-full bg-primaryLight px-7 py-2 cursor-pointer"
          >
            <button
              type="button"
              className="font-serif font-bold text-white text-lg"
            >
              Take a Challenges
            </button>
            <div className="ml-2 mt-1">
              <Image
                src="/arrowwhite.svg"
                alt="arrow"
                width={30}
                height={20}
                layout="fixed"
              />
            </div>
          </div>
          <div
            onClick={() => console.log("Join Us")}
            className="flex rounded-full bg-secondary px-7 py-2 cursor-pointer ml-10"
          >
            <button
              type="button"
              className="font-serif font-bold text-white text-lg"
            >
              Join Us
            </button>
            <div className="ml-2 mt-1">
              <Image
                src="/arrowwhite.svg"
                alt="arrow"
                width={30}
                height={20}
                layout="fixed"
              />
            </div>
          </div>
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

export default Challenge;

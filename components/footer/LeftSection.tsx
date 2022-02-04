import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faInstagram,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function LeftSection() {
  return (
    <div className="space-y-16">
      <div>
        <Image src="/logo.png" alt="wellteam" width={150} height={50} />
        <p className="text-white">
          Workouts for men everywhere
          <br />
          For a better life
        </p>
      </div>
      <div className="flex gap-6">
        <FontAwesomeIcon
          size="lg"
          className="text-secondary"
          icon={faInstagram}
        />
        <FontAwesomeIcon
          size="lg"
          className="text-secondary"
          icon={faFacebookF}
        />
        <FontAwesomeIcon
          size="lg"
          className="text-secondary"
          icon={faLinkedinIn}
        />
      </div>

      <p className="underline">jsunnykhan2@gmail.com</p>

      <div className="">
        <h1 className="font-serif font-bold text-3xl ">
          Subscribe to our newsletter
        </h1>

        <input
          type="email"
          className="bg-transparent outline-none py-4 border-b-2 border-b-primaryLight placeholder-slate-600 font-serif mt-3 w-auto"
          placeholder="Sign up for updates"
        />
      </div>

      <p className="text-gray-500">@ 2021 All rights reserved Wellteam pt lt.</p>
    </div>
  );
}

export default LeftSection;

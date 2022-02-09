import React from "react";
import TwitterCard from "../cards/TwitterCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

function TwitterFeedback() {
  return (
    <div className="space-y-5 bg-primaryLight rounded-xl shadow-gray-800 shadow px-5 py-4">
      <TwitterCard />

      <p>
        Excellent. The program I am doing is the eight week challenge and it is
        very well structured with exceptional content. The Monday night Zoom
        meetings and the Saturday team walks are a great way to talk with others
        and meet people
      </p>
      <div className="flex justify-between flex-shrink-0">
        <p className="text-gray-600 text-sm">7:00 Am Feb 7,2022</p>
        <FontAwesomeIcon size="lg" className="text-sky-400" icon={faTwitter} />
      </div>
    </div>
  );
}

export default TwitterFeedback;

import React from "react";
import TwitterFeedback from "./TwitterFeedback";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

function Feedback() {
  return (
    <div className=" w-4/5 mt-20 mx-auto justify-center items-center space-y-20">
      <div className="grid grid-cols-3 gap-5">
        <TwitterFeedback />
        <TwitterFeedback />
        <TwitterFeedback />
        <TwitterFeedback />
        <TwitterFeedback />
        <TwitterFeedback />
      </div>

      <div className="flex max-w-screen-md mx-auto justify-between rounded-lg border-dotted border-2 border-gray-800 bg-primaryLight px-10 py-5">
        <div className="flex items-center space-x-3">
          <h2>4.7</h2>
          <div className="text-center">
            <p className="font-bold text-xl">out of 5</p>
            <div>
              {[...Array(Math.floor(4.7))].map((d, i) => {
                return (
                  <>
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className="text-secondary"
                    />

                    {Math.floor(4.7) !== 5 && Math.floor(4.7) === i + 1
                      ? [...Array(5 - Math.floor(4.7))].map((ds, j) => (
                          <FontAwesomeIcon key={i} icon={faStar} />
                        ))
                      : null}
                  </>
                );
              })}
            </div>
          </div>
        </div>

        <p>
          100% satisfied afterwards,
          <br />
          From 300+ user Reviews
        </p>

        <div className="flex flex-shrink-0 items-center space-x-5">
          <p className="text-secondary">Read all reviews</p>
          <FontAwesomeIcon icon={faLongArrowAltRight} />
        </div>
      </div>
    </div>
  );
}

export default Feedback;

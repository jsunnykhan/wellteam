import { title } from "process";
import React from "react";
import ButtonComponent from "../common/ButtonComponent";

interface linkData {
  title: string;
  link: string;
}

function RightSection() {
  const footerLink = {
    company: [
      {
        title: "Challenges",
        link: "/challenges",
      },
      {
        title: "Membership",
        link: "/membership",
      },
      {
        title: "Blog",
        link: "/blog",
      },
      {
        title: "Events",
        link: "/event",
      },
      {
        title: "Instructors",
        link: "/instructors",
      },
      {
        title: "Special Offers",
        link: "/specialoffers",
      },
    ],
    article: [
      {
        title: "Fitness",
        link: "/fitness",
      },
      {
        title: "Food",
        link: "/food",
      },
      {
        title: "Health",
        link: "/health",
      },
      {
        title: "Workouts",
        link: "/workouts",
      },
      {
        title: "Nutrition",
        link: "/nutrition",
      },
    ],
    support: [
      {
        title: "Help Center",
        link: "/helpcenter",
      },
      {
        title: "Media Enquiries",
        link: "/media",
      },
      {
        title: "Privacy Policy",
        link: "/privacypolicy",
      },
      {
        title: "Terms of Use",
        link: "/termsofuse",
      },
      {
        title: "Cookie Policy",
        link: "/cookiepolicy",
      },
    ],
  };

  const onGetInTouchHandler = (e: any) => {
    console.log("Get in Touch");
  };

  const onJoinUsHandler = (e: any) => {
    console.log("Join Us");
  };

  return (
    <div>
      <div className="space-y-14 ">
        <div className="px-7 py-5 shadow-lg bg-primaryLight rounded space-y-4">
          <h5>
            Interested in Running Together?
          </h5>
          <div className="flex gap-5">
            <ButtonComponent
              title="Get in touch"
              bg_color="bg-primary"
              url="/arrowwhite.svg"
              onClickHandler={onGetInTouchHandler}
            />
            <ButtonComponent
              title="Join us"
              bg_color="bg-secondary"
              url="/arrowwhite.svg"
              onClickHandler={onJoinUsHandler}
            />
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div className="space-y-3">
            <h1 className="font-bold font-serif text-xl">Company</h1>
            {footerLink.company.map((data: linkData) => (
              <p className="text-gray-500 cursor-pointer" key={data.title}>
                {data.title}
              </p>
            ))}
          </div>
          <div className="space-y-3">
            <h1 className="font-bold font-serif text-xl">Articles</h1>
            {footerLink.article.map((data: linkData) => (
              <p className="text-gray-500 cursor-pointer" key={data.title}>
                {data.title}
              </p>
            ))}
          </div>
          <div className="space-y-3">
            <h1 className="font-bold font-serif text-xl">Support</h1>
            {footerLink.support.map((data: linkData) => (
              <p className="text-gray-500 cursor-pointer" key={data.title}>
                {data.title}
              </p>
            ))}
          </div>
        </div>
        <p className="text-gray-500">
          Troy Flower PO Box 3710, NORWOOD South Australia, 5067 AUSTRALIA
        </p>
      </div>
    </div>
  );
}

export default RightSection;

import Image from "next/image";
import React, { useEffect, useState } from "react";

function Banner() {
  const [sec, setSec] = useState<number>(0);
  const [min, setMin] = useState<number>(0);
  const [hour, setHour] = useState<number>(0);
  const [day, setDay] = useState<number>(0);

  useEffect((): any => {
    const countDownDate = new Date("Mar 5, 2022 00:00:00").getTime();
    const interval = setInterval(() => {
      const dateTimeNow = new Date().getTime();

      const remainingTime = countDownDate - dateTimeNow;

      const getDay = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      const getHour = Math.floor(
        (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const getMin = Math.floor(
        (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const getSec = Math.floor((remainingTime % (1000 * 60)) / 1000);
      setDay((days) => (days = getDay));
      setHour((hr) => (hr = getHour));
      setMin((min) => (min = getMin));
      setSec((sec) => (sec = getSec));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex bg-primaryLight max-w-max gap-x-10 rounded-md p-10 m-auto">
      <div className="space-y-5 max-w-min">
        <h4>4 new high-intensity programs</h4>
        <p>
          Make every minute count. High-intensity training with fast,fun
          workouts you can do anywhere,in 35 minutes or less.
        </p>

        <div className="bg-secondary px-5 py-4 rounded-lg flex justify-center gap-2 sm:gap-3 md:gap-4 truncate">
          <div className="text-center">
            <p className="font-bold">{day < 10 ? `0${day}` : day}</p>
            <p className="font-bold">Days</p>
          </div>
          <div className="text-center">
            <p className="font-bold">{hour < 10 ? `0${hour}` : hour}</p>
            <p className="font-bold">Hrs</p>
          </div>
          <div className="text-center">
            <p className="font-bold">{min < 10 ? `0${min}` : min}</p>
            <p className="font-bold">Mins</p>
          </div>
          <div className="text-center">
            <p className="font-bold">{sec < 10 ? `0${sec}` : sec}</p>
            <p className="font-bold">Secs</p>
          </div>

          <div className="bg-white px-5 py-4 rounded-lg -rotate-6">
            <p className="text-black font-serif font-bold">
              Buy for 20$ <span className="text-secondary"> $15</span>
            </p>
          </div>
        </div>
        <p className="italic">25% off today-30-Day Money-Back Guarantee</p>
      </div>

      <div className="my-auto">
        <Image
          src="/deal.svg"
          width={300}
          height={200}
          alt="Gift teamwell"
        />
      </div>
    </div>
  );
}

export default Banner;

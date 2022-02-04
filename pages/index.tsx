import type { NextPage } from "next";
import Challenge from "../components/challenge/Challenge";
import HomePage from "../components/home/HomePage";

const Home: NextPage = () => {
  return (
    <div>
      <HomePage />
      <Challenge />
    </div>
  );
};

export default Home;

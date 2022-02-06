import type { NextPage } from "next";
import ChallengeGuide from "../components/challenge-guide/ChallangeGuide";
import Challenge from "../components/challenge/Challenge";
import HomePage from "../components/home/HomePage";
import Programs from "../components/program/Programs";

const Home: NextPage = () => {
  return (
    <div>
      <HomePage />
      <Challenge />
      <Programs />
      <ChallengeGuide />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      title: "WellTeam",
    },
    revalidate: 60 * 60 * 24,
  };
}

import type { NextPage } from "next";
import ChallengeGuide from "../components/challenge-guide/ChallangeGuide";
import Challenge from "../components/challenge/Challenge";
import HomePage from "../components/home/HomePage";
import LatestStory from "../components/Latest/LatestStory";
import LatestVideo from "../components/Latest/LatestVideo";
import Banner from "../components/program/Banner";
import Programs from "../components/program/Programs";
import Feature from './../components/feature/Feature';

const Home: NextPage = () => {
  return (
    <div>
      <HomePage />
      <Challenge />
      <Programs />
      <Banner />
      <ChallengeGuide />
      <LatestVideo />
      <Feature />
      <LatestStory/>
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

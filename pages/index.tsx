import type { NextPage } from "next";
import Challenge from "../components/challenge/Challenge";
import Header from "../components/header/Header";
import Footer from './../components/footer/Footer';

const Home: NextPage = () => {
  return (
    <div className="bg-primary text-white">
      <div className="py-4 sm:max-w-6xl mx-auto ">
        <Header />
        <Challenge />
        <Footer/>
      </div>
    </div>
  );
};

export default Home;

import type { NextPage } from "next";
import Challenge from "../components/challenge/Challenge";
import Header from "../components/header/Header";

const Home: NextPage = () => {
  return (
    <body className="bg-primary h-screen px-10 lg:px-0">
      <main className="sm:max-w-5xl mx-auto">
        <Header />
        <Challenge />
      </main>
    </body>
  );
};

export default Home;

import { AppProps } from "next/app";
import React, { ReactNode } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

function Layout({ children }: any) {
  return (
    <div className="bg-primary text-white ">
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}

// max-w-screen-sm sm:max-w-3xl md:max-w-4xl lg:max-w-screen-sm m-auto

export default Layout;

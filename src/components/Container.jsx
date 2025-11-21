import React from "react";
import Navbar from "./Navbar.jsx";
import Page from "./Page.jsx";
import { Hero } from "./Hero.jsx";

const Container = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:py-4 relative z-10 ">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Container;

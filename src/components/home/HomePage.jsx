import React from "react";
import Footer from "../footer/footer";
import Blog from "./blog/Blog";
import Counter from "./counter/Counter";
import Features from "./features/Features";
import Pricing from "./pricing/Pricing";
import Roadmap from "./roadmap/Roadmap";
import WelcomeArea from "./welcome/WelcomeArea";

const HomePage = ({ data }) => {
  return (
    <>
      <WelcomeArea />
      <Features />
      <Roadmap />
      <Pricing />
      <Counter stats={data.stats} />
      <Blog />
      <Footer />
    </>
  );
};

export default HomePage;

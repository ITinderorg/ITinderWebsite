import React from "react";
import Footer from "../../components/footer/footer";
import Blog from "./components/blog/Blog";
import Counter from "./components/counter/Counter";
import Features from "./components/features/Features";
import Pricing from "./components/pricing/Pricing";
import Roadmap from "./components/roadmap/Roadmap";

const HomePage = ({ data }) => {
  return (
    <>
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

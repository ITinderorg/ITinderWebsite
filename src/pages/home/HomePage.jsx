import React from "react";
import Footer from "../../components/footer/footer";
import Blog from "./components/blog/Blog";
import Counter from "./components/counter/Counter";
import Pricing from "./components/pricing/Pricing";

const HomePage = ({ data }) => {
  return (
    <>
      <Pricing />
      <Counter stats={data.stats} />
      <Blog />
      <Footer />
    </>
  );
};

export default HomePage;

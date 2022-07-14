import React from "react";
import Footer from "../../components/footer/footer";
import Blog from "./components/blog/Blog";
import Counter from "./components/counter/Counter";

const HomePage = ({ data }) => {
  return (
    <>
      <Counter stats={data.stats} />
      <Blog />
      <Footer />
    </>
  );
};

export default HomePage;

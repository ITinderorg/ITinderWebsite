import React from "react";
import Footer from "../../components/footer/footer";
import Blog from "./components/blog/Blog";
import Counter from "./components/counter/Counter";

const HomePage = () => {
  return (
    <>
      <Counter />
      <Blog />
      <Footer />
    </>
  );
};

export default HomePage;

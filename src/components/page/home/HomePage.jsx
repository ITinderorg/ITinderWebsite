import React from "react";
import Blog from "./blog/Blog";
import Counter from "./counter/Counter";
import Features from "./features/Features";
import Pricing from "./pricing/Pricing";
import Roadmap from "./roadmap/Roadmap";
import WelcomeArea from "../../global/welcome/WelcomeArea";
import classes from "./HomePage.module.css";

const HomePage = ({ data }) => {
  return (
    <>
      <WelcomeArea>
        <h1>
          <strong>ITinder - бот</strong>
          <br />
          для швидкого пошуку <strong>роботи в IT</strong>
        </h1>
        <a href="https://t.me/i_tinder_bot" className="main-button-slider">
          Перейти до бота
        </a>
      </WelcomeArea>
      <Features />
      <Roadmap />
      <Pricing />
      <Counter stats={data.stats} />
      <Blog />
    </>
  );
};

export default HomePage;

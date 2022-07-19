import "../assets/styles/globals.css";
import "../assets/styles/templatemo-softy-pinko.css";
import "../assets/styles/flex-slider.css";
import "../assets/styles/font-awesome.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Spinner from "../components/spiner/Spinner";
import config from "react-reveal/globals";
import Fade from "react-reveal/Fade";

config({ ssrFadeout: true });

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Fade ssrReveal>
        <Component {...pageProps} />
      </Fade>
    </>
  );
}

export default MyApp;

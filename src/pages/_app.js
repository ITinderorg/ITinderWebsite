import "../assets/styles/globals.css";
import "../assets/styles/templatemo-softy-pinko.css";
import "../assets/styles/flex-slider.css";
import "../assets/styles/font-awesome.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Loader from "../components/loader/Loader";
import { useTransition, animated } from "react-spring";

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);
  const transition = useTransition(isLoading, {
    from: { opacity: 1 },
    to: { opacity: 0 },
    leave: { opacity: 0 },
    config: {
      duration: 500,
    },
  });
  useEffect(() => {
    setTimeout(function () {
      setIsLoading(false);
    }, 300);
  });
  return (
    <>
      {transition((style, item) =>
        item ? (
          <animated.div style={style} className="loaredWrapper">
            <Loader />
          </animated.div>
        ) : (
          ""
        )
      )}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

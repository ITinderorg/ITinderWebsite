import "../assets/styles/globals.css";
import "../assets/styles/templatemo-softy-pinko.css";
import "../assets/styles/flex-slider.css";
import "../assets/styles/font-awesome.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Spinner from "../components/spiner/Spinner";

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);

  return <>{isLoading ? <Spinner /> : <Component {...pageProps} />}</>;
}

export default MyApp;

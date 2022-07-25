import Head from "next/head";
import { useEffect, useState } from "react";
import HomePage from "../components/home/HomePage";
import Loader from "../components/loader/Loader";
import { useTransition, animated } from "react-spring";

export default function Home() {
  const [data, setData] = useState({
    stats: {
      candidates: 0,
      recruiters: 0,
    },
  });
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
    fetch("https://itinder-api.azurewebsites.net/itinder/getstat")
      .then((res) => res.json())
      .then((data) => {
        setData({
          stats: {
            candidates: data.candidatesCount,
            recruiters: data.recruitersCount,
          },
        });
        setTimeout(function () {
          setIsLoading(false);
        }, 300);
      });
  }, []);

  return (
    <>
      <Head>
        <title>ITinder</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="author" content="" />
        <meta
          name="description"
          content="Перший Український бот для пошуку роботи в IT!
          Ти рекрутер і в пошуку IT - шників? Заповнюй вакансію, отримай матч від кандидата, чекай на CV!"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="/" />
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:100,300,400,500,700,900"
          rel="stylesheet"
        />
      </Head>

      {transition((style, item) =>
        item ? (
          <animated.div style={style} className="loaderWrapper">
            <Loader />
          </animated.div>
        ) : (
          ""
        )
      )}

      <HomePage data={data} />
    </>
  );
}

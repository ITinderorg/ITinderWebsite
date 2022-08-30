import Head from "next/head";
import Header from "../../components/global/header/Header";
import Loader from "../../components/global/loader/Loader";
import Footer from "../../components/global/footer/Footer";
import { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";
import KnowledgebasePage from "../../components/page/knowledgebase/KnowledgebasePage";

export default function Index() {
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
    setInterval(function () {
      setIsLoading(false);
    }, 150);
  }, []);

  return (
    <>
      <Head>
        <title>ITinder Knowledgebase</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="author" content="" />
        <meta
          name="description"
          content="ITpartners - Запрошуємо бізнес до партнерства — тисячі IT спеціалістів чекають на ваші пропозиції🙌"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="/ITpartners" />
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

      <Header />
      <KnowledgebasePage />
      <Footer />
    </>
  );
}

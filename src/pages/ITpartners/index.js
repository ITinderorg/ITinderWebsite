import Head from "next/head";
import Header from "../../components/global/header/Header";
import Loader from "../../components/global/loader/Loader";
import Footer from "../../components/global/footer/Footer";
import { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";
import PartnersPage from "../../components/page/partners/PartnersPage";

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
        <title>ITpartner</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="ITpartners - Запрошуємо бізнес до партнерства — тисячі IT спеціалістів чекають на ваші пропозиції🙌"
        />
        <link rel="canonical" href="/ITpartners" />
        <link rel="alternate" href="/ITpartners" hrefLang="ua" />
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
      <PartnersPage />
      <Footer />
    </>
  );
}

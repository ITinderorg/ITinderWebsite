import Head from "next/head";
import Header from "../../../components/global/header/Header";
import Loader from "../../../components/global/loader/Loader";
import Footer from "../../../components/global/footer/Footer";
import { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";
import MentorDetailsPage from "../../../components/page/mentorDetails/MentorDetailsPage";
import { useRouter } from "next/router";
import ITmentorAPI from "../../../utils/apis/ITmentorAPI";

export default function Mentor(props) {
  const router = useRouter();
  const { id } = router.query;

  const [isLoading, setIsLoading] = useState(true);
  const transition = useTransition(isLoading, {
    from: { opacity: 1 },
    to: { opacity: 0 },
    leave: { opacity: 0 },
    config: {
      duration: 500,
    },
  });

  const [mentor, setMentor] = useState({
    id: 0,
    name: "",
    categoryid: 0,
    description: "",
    skills: "",
    position: "",
    price: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      setMentor(await ITmentorAPI.GetMentorById(id));
      setInterval(function () {
        setIsLoading(false);
      }, 150);
    };
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>ITmentor - деталі ментора</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="author" content="" />
        <meta
          name="description"
          content="ITmentor - тисячі IT спеціалістів чекають на ваші пропозиції"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="/ITmentor/mentor" />
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
      <MentorDetailsPage mentor={mentor} />
      <Footer />
    </>
  );
}
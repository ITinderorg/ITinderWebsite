import Head from "next/head";
import HomePage from "../components/home/HomePage";

export async function getStaticProps() {
  let response = await fetch(
    "https://itinder-api.azurewebsites.net/itinder/getstat"
  );
  let data = await response.json();
  return {
    props: {
      data: {
        stats: {
          candidates: data.candidatesCount,
          recruiters: data.recruitersCount,
        },
      },
    },
    revalidate: 1000,
  };
}

export default function Home({ data }) {
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

      <HomePage data={data} />
    </>
  );
}

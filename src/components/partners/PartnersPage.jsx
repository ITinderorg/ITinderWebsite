import WelcomeArea from "../welcome/WelcomeArea";
import AboutUs from "./aboutUs/AboutUs";
import classes from "./PartnersPage.module.css";

const PartnersPage = () => {
  return (
    <>
      <WelcomeArea>
        <h1>
          <strong>ITpartners</strong>
        </h1>
        <p className={classes.welcomeText}>
          Запрошуємо <strong>бізнес</strong> до партнерства —{" "}
          <strong>тисячі IT спеціалістів</strong> чекають на ваші пропозиції
        </p>
      </WelcomeArea>
      <AboutUs />
    </>
  );
};

export default PartnersPage;

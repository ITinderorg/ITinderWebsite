import WelcomeArea from "../../global/welcome/WelcomeArea";
import AboutUs from "./aboutUs/AboutUs";
import Benefits from "./benefits/Benefits";
import classes from "./PartnersPage.module.css";
import Pricing from "./pricing/Pricing";

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
      <Benefits />
      <Pricing />
    </>
  );
};

export default PartnersPage;

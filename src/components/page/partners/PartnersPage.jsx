import WelcomeArea from "../../global/welcome/WelcomeArea";
import AboutUs from "./aboutUs/AboutUs";
import Action from "./action/Action";
import Benefits from "./benefits/Benefits";
import OurPartners from "./ourPartners/OurPartners";
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
      <OurPartners />
      <Pricing />
      <Action />
    </>
  );
};

export default PartnersPage;

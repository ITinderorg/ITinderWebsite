import WelcomeArea from "../../global/welcome/WelcomeArea";
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
          <br />
          Запрошуємо <strong>бізнес</strong> до партнерства —{" "}
          <strong>тисячі IT спеціалістів</strong> чекають на ваші пропозиції
        </h1>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSex4KW7w_SFMk9D0E9XDrgxuIaMhTSlmBOSzYAQHVG3uHtKGg/viewform"
          className="main-button-slider"
        >
          Запартнеритись
        </a>
      </WelcomeArea>
      <Benefits />
      <OurPartners />
      <Pricing />
      <Action />
    </>
  );
};

export default PartnersPage;

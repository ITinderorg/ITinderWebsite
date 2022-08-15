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
          тисячі IT спеціалістів чекають на ваші пропозиції
        </h1>
        <a href="https://t.me/katrine_ryabova" className="main-button-slider">
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

import classes from "./MentorPage.module.css";
import WelcomeArea from "../../global/welcome/WelcomeArea";
import Description from "./description/Description";

const MentorPage = () => {
  return (
    <>
      <WelcomeArea>
        <h1>
          <strong>ITmentor</strong>
        </h1>
      </WelcomeArea>
      <Description />
    </>
  );
};

export default MentorPage;

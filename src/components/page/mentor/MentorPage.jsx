import classes from "./MentorPage.module.css";
import WelcomeArea from "../../global/welcome/WelcomeArea";
import Description from "./description/Description";
import WhyMentor from "./whyMentor/WhyMentor";
import StartLearning from "./startLearning/StartLearning";
import Action from "./action/Action";

const MentorPage = () => {
  return (
    <>
      <WelcomeArea>
        <h1>
          <strong>ITmentor</strong>
          <br />
          знайди свого ментора за
          <br />
          <strong>60 секунд</strong>
        </h1>
      </WelcomeArea>
      <Description />
      <WhyMentor />
      <StartLearning />
      <Action />
    </>
  );
};

export default MentorPage;

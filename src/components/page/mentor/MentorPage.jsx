import classes from "./MentorPage.module.css";
import WelcomeArea from "../../global/welcome/WelcomeArea";
import Description from "./description/Description";
import WhyMentor from "./whyMentor/WhyMentor";
import StartLearning from "./startLearning/StartLearning";

const MentorPage = () => {
  return (
    <>
      <WelcomeArea>
        <h1>
          <strong>ITmentor</strong>
        </h1>
      </WelcomeArea>
      <Description />
      <WhyMentor />
      <StartLearning />
    </>
  );
};

export default MentorPage;

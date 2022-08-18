import classes from "./MentorFormPage.module.css";
import Background from "./background/Background";
import FormCard from "./card/FormCard";

const MentorFormPage = () => {
  return (
    <>
      <div className={classes.template}>
        <Background />
      </div>
      <FormCard />
    </>
  );
};

export default MentorFormPage;

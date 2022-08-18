import classes from "./Background.module.css";
import GearImg from "../../../../assets/images/gear.png";

const Background = () => {
  return (
    <section className={classes.form}>
      <img
        src={GearImg.src}
        height="50px"
        width="50px"
        className={classes.image1}
      />
    </section>
  );
};

export default Background;

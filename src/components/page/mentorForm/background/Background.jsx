import classes from "./Background.module.css";
import GearImg from "../../../../assets/images/gear.png";

const Background = () => {
  return (
    <section className={classes.form}>
      <div className={classes.gearGroup1}>
        <img
          src={GearImg.src}
          height="50px"
          width="50px"
          className={classes.image1}
        />
        <img
          src={GearImg.src}
          height="90px"
          width="90px"
          className={classes.image2}
        />
        <img
          src={GearImg.src}
          height="70px"
          width="70px"
          className={classes.image3}
        />
      </div>

      <div className={classes.gearGroup2}>
        <img
          src={GearImg.src}
          height="50px"
          width="50px"
          className={classes.image1_2}
        />
        <img
          src={GearImg.src}
          height="90px"
          width="90px"
          className={classes.image2_2}
        />
        <img
          src={GearImg.src}
          height="70px"
          width="70px"
          className={classes.image3_2}
        />
      </div>
    </section>
  );
};

export default Background;

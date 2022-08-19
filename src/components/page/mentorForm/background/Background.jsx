import classes from "./Background.module.css";
import GearImg from "../../../../assets/images/gear.png";

const Background = () => {
  return (
    <section className={classes.form}>
      <div className={classes.gearGroup1}>
        <img
          src={GearImg.src}
          height={50}
          width={50}
          alt="gear"
          className={classes.image1}
        />
        <img
          src={GearImg.src}
          height={90}
          width={90}
          alt="gear"
          className={classes.image2}
        />
        <img
          src={GearImg.src}
          height={70}
          width={70}
          alt="gear"
          className={classes.image3}
        />
      </div>

      <div className={classes.gearGroup2}>
        <img
          src={GearImg.src}
          height={50}
          width={50}
          alt="gear"
          className={classes.image1_2}
        />
        <img
          src={GearImg.src}
          height={90}
          width={90}
          alt="gear"
          className={classes.image2_2}
        />
        <img
          src={GearImg.src}
          height={70}
          width={70}
          alt="gear"
          className={classes.image3_2}
        />
      </div>
    </section>
  );
};

export default Background;

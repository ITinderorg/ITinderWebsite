import classes from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div id="preloader">
      <div className="jumper">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;

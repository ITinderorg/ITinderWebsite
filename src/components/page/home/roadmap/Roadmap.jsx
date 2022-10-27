import classes from "./Roadmap.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Constants from "../../../../constants/HomeConstants";

const Roadmap = () => {
  const goals = Constants.Goals;
  return (
    <section className="mini" id="work-process">
      <div className="mini-content">
        <Container>
          <Row>
            <Col lg={6} className="offset-lg-3">
              <div className="info">
                <h1>Роадмап</h1>
                <p>
                  Ми плануємо не зупинятися і розширювати функціонал. Створювати
                  ком&apos;юніті і разом рухатися в Web3
                </p>
              </div>
            </Col>
          </Row>
          <Row className={classes.timeline_container}>
            <div className={classes.timeline}>
              <div className={classes.container}>
                {goals.map((item) => {
                  return (
                    <div
                      className={
                        classes.goal +
                        " " +
                        (item.id % 2 == 0
                          ? classes.goal_odd
                          : classes.goal_even) +
                        " " +
                        (item.completed ? classes.completed : "")
                      }
                      data-year={item.year}
                      data-text={item.text}
                      key={item.id}
                    ></div>
                  );
                })}
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Roadmap;

import classes from "./StartLearning.module.css";
import { Container, Row, Col } from "react-bootstrap";

const StartLearning = () => {
  return (
    <section className="mini" id="startLearning">
      <div className="mini-content">
        <Container>
          <Row>
            <Col lg={6} className="offset-lg-3">
              <div className="info">
                <h1>Почни вчитися вже сьогодні</h1>
                <p>Обери категорію яка тебе цікавить і вибери ментора</p>
                <div className="center-heading">
                  <a href="" className={classes.btn}>
                    <span>Всі категорії</span>
                    <div className={classes.transition}></div>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default StartLearning;

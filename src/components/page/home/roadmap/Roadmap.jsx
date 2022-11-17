import classes from "./Roadmap.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Constants from "../../../../constants/HomeConstants";
import RoadmapPhoneImg from "../../../../assets/images/roadmap_phone1.svg";
import RoadmapImg from "../../../../assets/images/roadmap.svg";

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
          <Row>
            <img className={classes.image} src={RoadmapImg.src} />
            <img className={classes.image_phone} src={RoadmapPhoneImg.src} />
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Roadmap;

import { Container, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Constants from "../../../../constants/MentorConstants.js";
import classes from "./WhyMentor.module.css";

const WhyMentor = () => {
  const points = Constants.WhyPoints;
  return (
    <Container>
      <Row className="pb-5">
        <Col>
          <div className="center-heading">
            <h2 className="section-title">Чому саме менторство</h2>
          </div>
        </Col>
      </Row>

      <Row>
        {points.map((item) => {
          return (
            <Col lg={3} md={6} sm={6} key={item.id}>
              <Fade bottom duration={1200} delay={200 * item.id}>
                <div className="features-small-item">
                  <div className="icon">
                    <i>
                      <img
                        width="100"
                        height="100"
                        alt="telegram"
                        title="telegram"
                        loading="lazy"
                      />
                    </i>
                  </div>
                  <h5 className="features-title">{item.title}</h5>
                  <p>{item.text}</p>
                </div>
              </Fade>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default WhyMentor;

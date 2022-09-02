import { Container, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Constants from "../../../../constants/MentorConstants.js";
import classes from "./WhyMentor.module.css";
import Image from "next/image";

const WhyMentor = () => {
  const points = Constants.WhyPoints;
  return (
    <section className="section" id="whyMentor">
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
                  <div className={classes.h360 + " features-small-item"}>
                    <div className="icon">
                      <i>
                        <Image
                          width={100}
                          height={100}
                          src={item.imageSrc}
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
    </section>
  );
};

export default WhyMentor;
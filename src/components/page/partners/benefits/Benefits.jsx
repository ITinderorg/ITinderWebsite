import classes from "./Benefits.module.css";
import { Container, Row, Col } from "react-bootstrap";
import constants from "../../../../constants/PartnersConstants";
import { Fade } from "react-reveal";

const Benefits = () => {
  const benefits = constants.Benefits;
  return (
    <section className="section" id="benefits">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="center-heading">
              <h2 className="section-title">Наші переваги</h2>
            </div>
          </Col>
        </Row>
        <Row className="padding-top-70">
          {benefits.map((item) => {
            return (
              <Row key={item.id}>
                <Col
                  lg={10}
                  md={10}
                  sm={12}
                  className={item.id % 2 == 0 ? "ms-auto text-end" : ""}
                >
                  {item.id % 2 == 0 ? (
                    <Fade
                      right
                      duration={1500}
                      delay={item.id * 120}
                      distance="125px"
                    >
                      <div className="features-small-item">
                        <div className={classes.gridRight}>
                          <h5 className={classes.benefitTitle}>{item.text}</h5>
                          <i className={item.iconClass}></i>
                        </div>
                      </div>
                    </Fade>
                  ) : (
                    <Fade
                      left
                      duration={1500}
                      delay={item.id * 120}
                      distance="125px"
                    >
                      <div className="features-small-item">
                        <div className={classes.gridLeft}>
                          <i className={item.iconClass}></i>
                          <h5 className={classes.benefitTitle}>{item.text}</h5>
                        </div>
                      </div>
                    </Fade>
                  )}
                </Col>
              </Row>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Benefits;

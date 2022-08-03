import classes from "./OurPartners.module.css";
import { Container, Row, Col } from "react-bootstrap";
import constants from "../../../../constants/PartnersConstants";

const OurPartners = () => {
  const partners = constants.Partners;
  /*return (
    <section className="mini" id="ourPartners">
      <div className="mini-content">
        <Container className="padding-top-40">
          <Row>
            <Col lg={12}>
              <div className="center-heading info">
                <h2>Наші партнери</h2>
              </div>
            </Col>
          </Row>
          <Row className="padding-top-70">
            {partners.map((item) => {
              return (
                <Col lg={3} md={6} sm={6} key={item.id}>
                  <div className="features-small-item">
                    <div className="icon">
                      <i>
                        <img
                          width="100"
                          height="100"
                          src={
                            require("../../../../assets/images/" +
                              item.imageName).default.src
                          }
                          alt="telegram"
                          title="telegram"
                          loading="lazy"
                        />
                      </i>
                    </div>
                    <h5 className="features-title">{item.name}</h5>
                    <p>{item.description}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </section>
  );*/
  return (
    <section className="mini" id="ourPartners">
      <div className="mini-content">
        <Container className="padding-top-40">
          <Row>
            <Col lg={12}>
              <div className="center-heading info">
                <h2>Наші партнери</h2>
              </div>
            </Col>
          </Row>
          <Row className="padding-top-70">
            <Col lg={12}>
              <div className="center-heading info text-center">
                <h2 className={classes.words}>
                  <span className={classes.jump + " " + classes.one}>C</span>
                  <span className={classes.jump + " " + classes.two}>o</span>
                  <span className={classes.jump + " " + classes.three}>m</span>
                  <span className={classes.jump + " " + classes.four}>i</span>
                  <span className={classes.jump + " " + classes.five}>n</span>
                  <span className={classes.jump + " " + classes.six}>g</span>
                  <span className={classes.jump + " " + classes.seven}>s</span>
                  <span className={classes.jump + " " + classes.eight}>o</span>
                  <span className={classes.jump + " " + classes.nine}>o</span>
                  <span className={classes.jump + " " + classes.ten}>n</span>
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default OurPartners;

import classes from "./OurPartners.module.css";
import { Container, Row, Col } from "react-bootstrap";
import constants from "../../../../constants/PartnersConstants";

const OurPartners = () => {
  const partners = constants.Partners;
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
            {partners.map((item) => {
              return (
                <Col
                  lg={4}
                  md={6}
                  sm={6}
                  key={item.id}
                  className="offset-lg-4 offset-md-3 offset-sm-3 d-flex justify-content-center"
                >
                  <div className={classes.item}>
                    <div className="icon">
                      <i>
                        <img
                          width="140"
                          height="160"
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
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default OurPartners;

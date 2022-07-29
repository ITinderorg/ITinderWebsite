import "./Pricing.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Constants from "../../../../constants/PartnersConstants";

const Pricing = () => {
  const pricings = Constants.Pricings;
  return (
    <section className="section" id="pricing-plans">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="center-heading">
              <h2 className="section-title">Прайс-лист для партнера</h2>
            </div>
          </Col>
          <Col lg={6} className="offset-lg-3">
            <div className="center-text">
              <p>Розмір бонусу залежить від професійного рівня кандидата.</p>
            </div>
          </Col>
        </Row>

        <Row>
          {pricings.map((item) => {
            return (
              <Col
                lg={4}
                md={6}
                sm={12}
                key={item.id}
                className={item.class ? item.class : ""}
              >
                <Fade bottom duration={1200 + ((item.id - 1) % 3) * 300}>
                  <div className="pricing-item">
                    <div className="pricing-header">
                      <h3 className="pricing-title">{item.title}</h3>
                    </div>
                    <div className="pricing-body">
                      <div className="price-wrapper">
                        <span className="currency">{item.currency}</span>
                        {item.oldPrice ? (
                          <span className="price">
                            <s>{item.oldPrice}</s> &#8594; {item.price}
                          </span>
                        ) : (
                          <span className="price"> {item.price}</span>
                        )}
                      </div>
                    </div>
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

export default Pricing;

import "./Pricing.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Constants from "../../../constants/Constants";

const Pricing = () => {
  const pricings = Constants.Pricings;
  return (
    <section className="section colored" id="pricing-plans">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="center-heading">
              <h2 className="section-title">Прайс-лист для рекрутера</h2>
            </div>
          </Col>
          <Col lg={6} className="offset-lg-3">
            <div className="center-text">
              <p>
                Розмір бонусу залежить від професійного рівня твого кандидата.
                Цей рівень ти вказуєш при створенні вакансії
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          {pricings.map((item) => {
            return (
              <Col lg={4} md={6} sm={12} key={item.title}>
                <Fade bottom>
                  <div className="pricing-item">
                    <div className="pricing-header">
                      <h3 className="pricing-title">{item.title}</h3>
                    </div>
                    <div className="pricing-body">
                      <div className="price-wrapper">
                        <span className="currency">{item.currency}</span>
                        <span className="price">{item.price}</span>
                      </div>
                    </div>
                  </div>
                </Fade>
              </Col>
            );
          })}
        </Row>
        <Row>
          <Col lg={4} md={6} sm={12} className="center">
            <div className="pricing-item">
              <div className="pricing-header">
                <h3 className="pricing-title">Трейні</h3>
              </div>
              <div className="pricing-body">
                <div className="price-wrapper">
                  <span className="currency">$</span>
                  <span className="price">1</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Pricing;

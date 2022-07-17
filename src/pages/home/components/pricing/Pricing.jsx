import "./Pricing.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";

const Pricing = () => {
  const pricings = [
    {
      title: "Трейні",
      price: 1,
      currency: "$",
    },
    {
      title: "Джун",
      price: 100,
      currency: "$",
    },
    {
      title: "Мідл",
      price: 400,
      currency: "$",
    },
    {
      title: "Сіньйор",
      price: 800,
      currency: "$",
    },
  ];
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
              <Col lg={3} md={6} sm={12} key={item.title}>
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
      </Container>
    </section>
  );
};

export default Pricing;

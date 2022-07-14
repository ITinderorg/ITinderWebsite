import "./Pricing.module.css";
import { Container, Row, Col } from "react-bootstrap";

const Pricing = () => {
  const pricings = [
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
    {
      title: "Трейні",
      price: 1,
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

        <Row class="row">
          {pricings.map((item) => {
            return (
              <Col
                lg={4}
                md={6}
                sm={12}
                data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s"
              >
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
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Pricing;

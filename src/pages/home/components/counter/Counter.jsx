import "./Counter.module.css";
import { Container, Row, Col } from "react-bootstrap";

const Counter = ({ stats }) => {
  return (
    <section className="counter">
      <div className="content">
        <Container>
          <Row>
            <Col lg={3} md={6} sm={12}></Col>
            <Col lg={3} md={6} sm={12}>
              <div className="count-item">
                <strong>{stats.candidates}</strong>
                <span>Кандидатів</span>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="count-item">
                <strong>{stats.recruiters}</strong>
                <span>Рекрутерів</span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Counter;

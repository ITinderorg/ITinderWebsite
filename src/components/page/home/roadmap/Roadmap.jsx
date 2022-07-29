import "./Roadmap.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Constants from "../../../../constants/HomeConstants";

const Roadmap = () => {
  const goals = Constants.Goals;
  return (
    <section className="mini" id="work-process">
      <div className="mini-content">
        <Container>
          <Row>
            <Col lg={6} className="offset-lg-3">
              <div className="info">
                <h1>Роадмап</h1>
                <p>
                  Ми плануємо не зупинятися і розширювати функціонал. Створювати
                  ком&apos;юніті і разом рухатися в Web3
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            {goals.map((item) => {
              return (
                <Col lg={2} md={3} sm={6} xs={6} key={item.month}>
                  <a
                    className={
                      item.complete ? "mini-box-completed" : "mini-box"
                    }
                  >
                    <strong>{item.month}</strong>
                    {item.points.map((point) => {
                      return point == "<br />" ? (
                        <br key={point} />
                      ) : (
                        <span key={point}>{point}</span>
                      );
                    })}
                  </a>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Roadmap;
import styles from "./Counter.module.css";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";

const Counter = ({ stats }) => {
  return (
    <section className="counter">
      <div className="content">
        <Container>
          {stats.candidates == 0 ? (
            ""
          ) : (
            <Row>
              <Col lg={3} md={6} sm={12}></Col>
              <Col lg={3} md={6} sm={12}>
                <div className="count-item">
                  <CountUp
                    start={0}
                    end={stats.candidates}
                    duration={1}
                    enableScrollSpy
                    scrollSpyDelay={1}
                  >
                    {({ countUpRef }) => <strong ref={countUpRef} />}
                  </CountUp>
                  <span>Кандидатів</span>
                </div>
              </Col>
              <Col lg={3} md={6} sm={12}>
                <div className="count-item">
                  <CountUp
                    start={0}
                    end={stats.recruiters}
                    duration={1}
                    enableScrollSpy
                    scrollSpyDelay={1}
                  >
                    {({ countUpRef }) => <strong ref={countUpRef} />}
                  </CountUp>
                  <span>Рекрутерів</span>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </div>
    </section>
  );
};

export default Counter;

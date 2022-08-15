import classes from "./Action.module.css";
import { Container, Row, Col } from "react-bootstrap";

const Action = () => {
  return (
    <section className="section" id="action">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="center-heading">
              <a href="https://t.me/katrine_ryabova" className={classes.btn}>
                <span>Запартнеритись</span>
                <div className={classes.transition}></div>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Action;

import classes from "./Action.module.css";
import { Container, Row, Col } from "react-bootstrap";

const Action = () => {
  return (
    <section className="section" id="action">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="center-heading">
              <h2 className="section-title">Ви з нами?</h2>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSex4KW7w_SFMk9D0E9XDrgxuIaMhTSlmBOSzYAQHVG3uHtKGg/viewform"
                className="main-button-slider btn"
              >
                Заповнити форму
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Action;

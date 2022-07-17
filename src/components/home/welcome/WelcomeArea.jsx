import "./WelcomeArea.module.css";
import { Container, Row, Col } from "react-bootstrap";

const WelcomeArea = () => {
  return (
    <div className="welcome-area" id="welcome">
      <div className="header-text">
        <Container>
          <Row>
            <Col
              lg={8}
              md={12}
              sm={12}
              xl={6}
              className="offset-xl-3 offset-lg-2"
            >
              <h1>
                <strong>ITinder - бот</strong>
                <br />
                для швидкого пошуку <strong>роботи в IT</strong>
              </h1>
              <a
                href="https://t.me/i_tinder_bot"
                className="main-button-slider"
              >
                Перейти до бота
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default WelcomeArea;

import "./WelcomeArea.module.css";
import { Container, Row, Col } from "react-bootstrap";

const WelcomeArea = ({ children }) => {
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
              {children}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default WelcomeArea;

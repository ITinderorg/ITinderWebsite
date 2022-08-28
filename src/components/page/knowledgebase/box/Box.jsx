import classes from "./Box.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

const Box = ({ children }) => {
  return (
    <Container>
      <Row>
        <Col className={classes.box}>
          <div className={classes.documents}>
            <Nav>
              <Nav.Link href="/Knowledgebase" className={classes.link}>
                Головна
              </Nav.Link>
              <Nav.Link
                href="/Knowledgebase/PrivacyPolicy"
                className={classes.link}
              >
                Політика коніфденційності
              </Nav.Link>
            </Nav>
          </div>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default Box;

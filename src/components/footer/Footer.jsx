import classes from "./Footer.module.css";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <ul className="social">
              <li>
                <a href="https://t.me/I_Tinder">
                  <i className="fa fa-paper-plane"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <p className="copyright">Copyright &copy; 2022 ITinder</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

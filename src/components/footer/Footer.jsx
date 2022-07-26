import classes from "./Footer.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Constants from "../../constants/Constants";

const Footer = () => {
  const socials = Constants.Socials;
  return (
    <footer>
      <Container>
        <Row className="justify-content-center">
          <Col sm={12} md={12} lg={12}>
            <ul className="social">
              {socials.map((item) => {
                return (
                  <li key={item.id}>
                    <a href={item.href} className={classes.socialLink}>
                      <i className={item.iconClass}></i>
                    </a>
                  </li>
                );
              })}
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

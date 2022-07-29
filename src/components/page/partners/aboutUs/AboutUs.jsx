import classes from "./AboutUs.module.css";
import { Container, Row, Col } from "react-bootstrap";

const AboutUs = () => {
  return (
    <section className="section" id="aboutUs">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="center-heading">
              <h2 className="section-title">Про нас</h2>
            </div>
          </Col>
          <Col lg={6} className="offset-lg-3">
            <div className="center-text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                doloremque debitis, dolore eligendi quae molestias eos illo vero
                ab enim, asperiores assumenda sequi modi iusto tenetur aliquam
                minima, recusandae maiores! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Natus doloremque debitis, dolore
                eligendi quae molestias eos illo vero ab enim, asperiores
                assumenda sequi modi iusto tenetur aliquam minima, recusandae
                maiores! Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Natus doloremque debitis, dolore eligendi quae molestias
                eos illo vero ab enim, asperiores assumenda sequi modi iusto
                tenetur aliquam minima, recusandae maiores!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;

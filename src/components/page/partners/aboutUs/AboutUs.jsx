import classes from "./AboutUs.module.css";
import { Container, Row } from "react-bootstrap";

const AboutUs = () => {
  return (
    <section className="section" id="aboutUs">
      <Container>
        <Row className="text-center">
          <h1>Про нас</h1>
        </Row>
        <Row>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            doloremque debitis, dolore eligendi quae molestias eos illo vero ab
            enim, asperiores assumenda sequi modi iusto tenetur aliquam minima,
            recusandae maiores! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Natus doloremque debitis, dolore eligendi quae
            molestias eos illo vero ab enim, asperiores assumenda sequi modi
            iusto tenetur aliquam minima, recusandae maiores! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Natus doloremque debitis,
            dolore eligendi quae molestias eos illo vero ab enim, asperiores
            assumenda sequi modi iusto tenetur aliquam minima, recusandae
            maiores!
          </p>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;

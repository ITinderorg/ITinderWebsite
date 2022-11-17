import classes from "./Benefits.module.css";
import { Container, Row, Col } from "react-bootstrap";
import constants from "../../../../constants/PartnersConstants";
import { Fade } from "react-reveal";
import Delivery from "../../../../assets/images/Delivery.png";

const Benefits = () => {
  const benefits = constants.Benefits;
  return (
    <section className="section" id="benefits">
      <Container>
        {benefits.map((item) => {
          return (
            <Row
              className="align-items-center justify-content-center justify-content-md-between"
              key={item.id}
            >
              {item.id % 2 == 0 ? (
                <>
                  <Col
                    lg={5}
                    md={6}
                    sm={12}
                    className="order-sm-2 text-center text-md-left mb-4 order-md-2"
                  >
                    <h2 className="display-4 font-weight-bold mt-4">
                      {item.title}
                    </h2>
                    <p className="lead text-gray-700">{item.text}</p>
                  </Col>
                  <Col lg={7} md={6} sm={12}>
                    <Fade left duration={1700} distance="25px">
                      <img
                        width="300"
                        height="300"
                        src={item.imageSrc}
                        alt="App"
                        loading="lazy"
                        className="mx-auto d-block"
                      />
                    </Fade>
                  </Col>
                </>
              ) : (
                <>
                  <Col
                    lg={5}
                    md={6}
                    sm={12}
                    className="text-center text-md-left mb-4"
                  >
                    <h2 className="display-4 font-weight-bold mt-4">
                      {item.title}
                    </h2>
                    <p className="lead text-gray-700">{item.text}</p>
                  </Col>
                  <Col lg={7} md={6} sm={12}>
                    <Fade right duration={1700} distance="25px">
                      <img
                        width="300"
                        height="300"
                        src={item.imageSrc}
                        alt="App"
                        loading="lazy"
                        className="mx-auto d-block"
                      />
                    </Fade>
                  </Col>
                </>
              )}
            </Row>
          );
        })}
      </Container>
    </section>
  );
};

export default Benefits;

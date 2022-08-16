import { Container, Row, Col } from "react-bootstrap";
import Constants from "../../../../constants/MentorConstants.js";
import classes from "./Description.module.css";
import { Fade } from "react-reveal";

const Description = () => {
  const points = Constants.DescriptionPoints;
  return (
    <Container>
      <Row>
        <Col>
          <div className="center-heading">
            <h2 className="section-title">Як це працює</h2>
          </div>
        </Col>
      </Row>
      {points.map((item) => {
        return (
          <Row key={item.id}>
            <Col
              lg={6}
              md={6}
              sm={12}
              className="order-md-2 align-items-center text-sm-center d-flex"
            >
              <p className="lead">{item.text}</p>
            </Col>
            <Col lg={6} md={6} sm={12}>
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
          </Row>
        );
      })}
    </Container>
  );
};

export default Description;

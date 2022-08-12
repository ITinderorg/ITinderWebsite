import { Container, Row, Col } from "react-bootstrap";
import Constants from "../../../../constants/MentorConstants.js";
import classes from "./Description.module.css";

const Description = () => {
  const points = Constants.Points;
  return (
    <Container>
      <Row>
        <Col>
          <div className="center-heading">
            <h2 className="section-title">Прайс-лист для рекрутера</h2>
          </div>
        </Col>
      </Row>
      {points.map((item) => {
        return <Row key={item.id}></Row>;
      })}
    </Container>
  );
};

export default Description;

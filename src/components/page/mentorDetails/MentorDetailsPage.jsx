import classes from "./MentorDetailsPage.module.css";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { useState } from "react";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body>
        <h4>Підтвердь дію</h4>
        <br />
        <p>
          Ти точно хочеш займатися з ментором{" "}
          <strong>{props.mentor.name}</strong> за{" "}
          <strong>{props.mentor.price}$</strong> за годину?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Закрити
        </Button>
        <Button variant="success" onClick={props.onConfirm}>
          Оплатити
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const MentorDetailsPage = ({ mentor }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <section className="section" id="mentorDetails">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="center-heading">
              <h2 className="section-title">Деталі ментора</h2>
            </div>
          </Col>
        </Row>
        <Row className="pt-4">
          <img
            src={`data:image/jpeg;base64,${mentor.photo}`}
            className={classes.image}
          />
          <Col lg={5} md={5} sm={7}>
            <h2>{mentor.name}</h2>
            <h3>{mentor.position}</h3>
            <h4>
              <strong>${mentor.price}</strong> за годину
            </h4>
          </Col>
          <Col
            lg={3}
            md={3}
            sm={12}
            className="text-center pt-3 d-flex flex-column justify-content-center"
          >
            <Row>
              <h4>Замов сессію зараз</h4>
            </Row>
            <Row>
              <Button variant="primary" onClick={() => setModalShow(true)}>
                Почати вчитись
              </Button>
            </Row>
          </Col>
        </Row>
        <Row className="pt-4">
          <Col>
            <h3>Чим я можу бути кориним: </h3>
            <p>{mentor.skills}</p>
            <h3>Опис:</h3>
            <p>{mentor.description}</p>
            <h3>Відгуки:</h3>
            <p>
              {mentor.comments == ""
                ? "Відгуків про цього ментора поки немає"
                : mentor.comments}
            </p>
          </Col>
        </Row>
      </Container>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        mentor={mentor}
        size="md"
      />
    </section>
  );
};

export default MentorDetailsPage;

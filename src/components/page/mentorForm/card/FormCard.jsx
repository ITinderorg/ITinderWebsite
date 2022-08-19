import classes from "./FormCard.module.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import useInput from "../../../../utils/hooks/useInput";
import { useState } from "react";
import { useEffect } from "react";
import GearImg from "../../../../assets/images/gear.png";

const FormCard = () => {
  const name = useInput("", { minLength: 3, isEmpty: false });
  const skills = useInput("", { isEmpty: false });
  const position = useInput("");
  const description = useInput("", { isEmpty: false });
  const price = useInput(0, { greaterThan: 0 });
  const contact = useInput("", { isEmpty: false });
  const [photo, setPhoto] = useState();

  const [inputValid, setInputValid] = useState(false);

  useEffect(() => {
    if (
      name.inputValid &&
      skills.inputValid &&
      description.inputValid &&
      price.inputValid &&
      contact.inputValid
    ) {
      setInputValid(true);
    } else {
      setInputValid(false);
    }
  }, [
    name.inputValid,
    skills.inputValid,
    description.inputValid,
    price.inputValid,
    contact.inputValid,
  ]);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onPhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  return (
    <section className="section" id="formCard">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="center-heading">
              <h2 className="section-title">Стати ментором</h2>
            </div>
          </Col>
          <Col lg={6} className="offset-lg-3">
            <div className="center-text mb-1">
              <p>Почни заробляти на своєму досвіді</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={1}>
            <div className={classes.gearGroup2}>
              <img
                src={GearImg.src}
                height={50}
                width={50}
                alt="gear"
                className={classes.image1_2}
              />
              <img
                src={GearImg.src}
                height={90}
                width={90}
                alt="gear"
                className={classes.image2_2}
              />
              <img
                src={GearImg.src}
                height={70}
                width={70}
                alt="gear"
                className={classes.image3_2}
              />
            </div>
          </Col>
          <Col lg={6} md={8} className="offset-lg-3 offset-md-2">
            <Form onSubmit={onSubmit}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Ім&apos;я та призвіще</Form.Label>
                <Form.Control
                  onChange={(e) => name.onChange(e)}
                  onBlur={(e) => name.onBlur(e)}
                  value={name.value}
                  type="text"
                  placeholder="Напиши своє ім'я та призвіще"
                  required
                />
                {name.isDirty && name.isEmpty && (
                  <Form.Text style={{ color: "red" }}>
                    Ім&apos;я не може бути пустим
                  </Form.Text>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="skills">
                <Form.Label>Навички</Form.Label>
                <Form.Control
                  onChange={(e) => skills.onChange(e)}
                  onBlur={(e) => skills.onBlur(e)}
                  value={skills.value}
                  type="text"
                  placeholder="Опиши свої навички"
                  required
                />
                {skills.isDirty && skills.isEmpty && (
                  <Form.Text style={{ color: "red" }}>
                    Ти маєш описати хоча б одну навичку
                  </Form.Text>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="position">
                <Form.Label>Позиція</Form.Label>
                <Form.Control
                  onChange={(e) => position.onChange(e)}
                  onBlur={(e) => position.onBlur(e)}
                  value={position.value}
                  type="text"
                  placeholder="Напиши свою (останню) позицію у компанії"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Опис</Form.Label>
                <Form.Control
                  onChange={(e) => description.onChange(e)}
                  onBlur={(e) => description.onBlur(e)}
                  value={description.value}
                  type="text"
                  placeholder="Опиши чим ти можеш бути корисним"
                  required
                />
                {description.isDirty && description.isEmpty && (
                  <Form.Text style={{ color: "red" }}>
                    Ти маєш описати себе
                  </Form.Text>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="price">
                <Form.Label>Ціна (у $)</Form.Label>
                <Form.Control
                  onChange={(e) => price.onChange(e)}
                  onBlur={(e) => price.onBlur(e)}
                  value={price.value}
                  type="number"
                  placeholder="Напиши ціну за годину твого часу"
                  min="1"
                  max="20000"
                  step="1"
                  required
                />
              </Form.Group>
              {price.isDirty && price.greaterError && (
                <Form.Text style={{ color: "red" }}>
                  Ти маєш брати хоч якусь плату за свої послуги
                </Form.Text>
              )}

              <Form.Group className="mb-3" controlId="contact">
                <Form.Label>Контакти</Form.Label>
                <Form.Control
                  onChange={(e) => contact.onChange(e)}
                  onBlur={(e) => contact.onBlur(e)}
                  value={contact.value}
                  type="text"
                  placeholder="Залиш свої контакти (номер телефону, нік у телеграм, тощо)"
                  required
                />
                {contact.isDirty && contact.isEmpty && (
                  <Form.Text style={{ color: "red" }}>
                    Ти маєш залишити хоча б один контакт
                  </Form.Text>
                )}
              </Form.Group>

              <Form.Group className="mb-3 files" controlId="file">
                <Form.Label>Завантаж своє фото</Form.Label>
                <Form.Control type="file" onChange={onPhotoChange} />
              </Form.Group>

              <div className="center-heading">
                <Button
                  type="submit"
                  disabled={!inputValid}
                  className={classes.btn}
                >
                  <span>Стати ментором</span>
                  <div className={classes.transition}></div>
                </Button>
              </div>
            </Form>
          </Col>
          <Col lg={1}>
            <div className={classes.gearGroup1}>
              <img
                src={GearImg.src}
                height={50}
                width={50}
                alt="gear"
                className={classes.image1}
              />
              <img
                src={GearImg.src}
                height={90}
                width={90}
                alt="gear"
                className={classes.image2}
              />
              <img
                src={GearImg.src}
                height={70}
                width={70}
                alt="gear"
                className={classes.image3}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FormCard;

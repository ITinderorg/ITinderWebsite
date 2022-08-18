import classes from "./Action.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { Fade } from "react-reveal";
import SearchMentor from "../../../../assets/images/searchMentor.png";
import BecomeMentor from "../../../../assets/images/becomeMentor.png";

const Action = () => {
  return (
    <section className="section" id="action">
      <Container>
        <Row className="align-items-center justify-content-center justify-content-md-between">
          <Col
            lg={6}
            md={6}
            sm={12}
            className="text-center mb-4 justify-content-center d-flex"
          >
            <div className={classes.box}>
              <h2 className="display-4 font-weight-bold mt-4">
                Шукаєш ментора?
              </h2>
              <p className="lead text-gray-700">
                Сотні висококваліфікованих спеціалістів готові тобі допомогти
              </p>
              <div className="center-heading">
                <a href="" className={classes.btn}>
                  <span>Обрати ментора</span>
                </a>
              </div>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <Fade right duration={1700} distance="25px">
              <img
                width="300"
                height="300"
                src={SearchMentor.src}
                alt="App"
                loading="lazy"
                className="mx-auto d-block"
              />
            </Fade>
          </Col>
        </Row>

        <Row className="align-items-center justify-content-center justify-content-md-between">
          <Col
            lg={6}
            md={6}
            sm={12}
            className="order-sm-2 text-center justify-content-center d-flex mb-4 order-md-2"
          >
            <div className={classes.box}>
              <h2 className="display-4 font-weight-bold mt-4">
                Хочеш стати ментором?
              </h2>
              <p className="lead text-gray-700">
                Заповни форму за 15 хвилин і почни ділитися досвідом вже
                сьогодні
              </p>
              <div className="center-heading">
                <a href="/ITmentor/form" className={classes.btn}>
                  <span>Стати ментором</span>
                </a>
              </div>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <Fade left duration={1700} distance="25px">
              <img
                width="300"
                height="300"
                src={BecomeMentor.src}
                alt="App"
                loading="lazy"
                className="mx-auto d-block"
              />
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Action;

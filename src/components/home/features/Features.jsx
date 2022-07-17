import "./Features.module.css";
import { Container, Row, Col } from "react-bootstrap";
import ITinder from "../../../assets/images/ITinder-5.svg";
import UAFlag from "../../../assets/images/uaflag.png";
import Liqpay from "../../../assets/images/liqpay.png";
import Bitcoin from "../../../assets/images/bitcoin.png";
import MainPageBot from "../../../assets/images/mainpagebot.png";
import Recruiter from "../../../assets/images/recruiter.png";
import Candidate from "../../../assets/images/candidate.png";
import Fade from "react-reveal/Fade";

const Features = () => {
  return (
    <>
      <section className="section home-feature">
        <Container>
          <Row>
            <Col lg={12}>
              <Row>
                <Col lg={4} md={6} sm={6}>
                  <Fade bottom>
                    <div className="features-small-item">
                      <div className="icon">
                        <i>
                          <img width="100" src={ITinder.src} alt="" />
                        </i>
                      </div>
                      <h5 className="features-title">Швидкий найм</h5>
                      <p>Клік-клік, пропозиції в твоєму телеграм</p>
                    </div>
                  </Fade>
                </Col>
                <Col lg={4} md={6} sm={6}>
                  <Fade bottom>
                    <div className="features-small-item">
                      <div className="icon">
                        <i>
                          <img width="100" src={UAFlag.src} alt="" />
                        </i>
                      </div>
                      <h5 className="features-title">
                        30% прибутку летить на ЗСУ
                      </h5>
                      <p>#StandWithUkraine</p>
                    </div>
                  </Fade>
                </Col>
                <Col lg={4} md={6} sm={6}>
                  <Fade bottom>
                    <div className="features-small-item">
                      <Row>
                        <div className="icon">
                          <i>
                            <img width="120" src={Liqpay.src} alt="" />
                          </i>
                        </div>
                        <div className="icon">
                          <i>
                            <img width="80" src={Bitcoin.src} alt="" />
                          </i>
                        </div>
                      </Row>
                      <h5 className="features-title">Оплата за найм</h5>
                      <p>Сплачуй через Liqpay або криптою</p>
                    </div>
                  </Fade>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className="section padding-top-70 padding-bottom-0"
        id="features"
      >
        <Container>
          <Row>
            <Col lg={5} md={12} sm={12} className="align-self-center">
              <Fade left>
                <img width="400" src={MainPageBot.src} alt="App" />
              </Fade>
            </Col>
            <Col lg={1}></Col>
            <Col
              lg={6}
              md={12}
              sm={12}
              className="align-self-center mobile-top-fix"
            >
              <div className="left-heading">
                <h2 className="section-title">ITinder-bot</h2>
              </div>
              <div className="left-text">
                <p>Простий найм через телеграм. Тисни Start, щоб розпочати</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section padding-bottom-100">
        <Container fluid="xl">
          <Row>
            <Col
              lg={6}
              md={12}
              sm={12}
              className="align-self-center mobile-bottom-fix"
            >
              <div className="left-heading">
                <h2 className="section-title">
                  Ти рекрутер і в пошуку IT-шників ?
                </h2>
              </div>
              <div className="left-text">
                <p>
                  Заповнюй вакансію, отримай матч від кандидата, чекай на CV.
                  Зробив успішний найм - заходь в Інвойси і сплачуй
                </p>
              </div>
            </Col>
            <Col lg={1}></Col>

            <Col
              lg={5}
              md={12}
              sm={12}
              className="align-self-center mobile-bottom-fix-big"
            >
              <Fade right>
                <img width="420" src={Recruiter.src} alt="App" />
              </Fade>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className="section padding-top-70 padding-bottom-0"
        id="featuresUp"
      >
        <Container>
          <Row>
            <Col lg={5} md={12} sm={12} className="align-self-center">
              <Fade left>
                <img width="400" src={Candidate.src} alt="App" />
              </Fade>
            </Col>
            <Col lg={1}></Col>
            <Col
              lg={6}
              md={12}
              sm={12}
              className="align-self-center mobile-top-fix"
            >
              <div className="left-heading">
                <h2 className="section-title">Шукаєш роботу в IT ? </h2>
              </div>
              <div className="left-text">
                <p>
                  Заповнюй анкету, вподобай вакансію, cпілкуйся й лови оффер
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div className="hr"></div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Features;

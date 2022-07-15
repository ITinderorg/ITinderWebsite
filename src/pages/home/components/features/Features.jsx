import "./Features.module.css";
import { Container, Row, Col } from "react-bootstrap";
import ITinder from "../../../../assets/images/ITinder-5.svg";
import UAFlag from "../../../../assets/images/uaflag.png";
import Liqpay from "../../../../assets/images/liqpay.png";
import Bitcoin from "../../../../assets/images/bitcoin.png";
import MainPageBot from "../../../../assets/images/mainpagebot.png";
import Recruiter from "../../../../assets/images/recruiter.png";
import Candidate from "../../../../assets/images/candidate.png";

const Features = () => {
  return (
    <>
      <section class="section home-feature">
        <Container>
          <Row>
            <Col lg={12}>
              <Row>
                <Col
                  lg={4}
                  md={6}
                  sm={6}
                  data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s"
                >
                  <div className="features-small-item">
                    <div className="icon">
                      <i>
                        <img width="100" src={ITinder.src} alt="" />
                      </i>
                    </div>
                    <h5 className="features-title">Швидкий найм</h5>
                    <p>Клік-клік, пропозиції в твоєму телеграм</p>
                  </div>
                </Col>
                <Col
                  lg={4}
                  md={6}
                  sm={6}
                  data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s"
                >
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
                </Col>
                <Col
                  lg={4}
                  md={6}
                  sm={6}
                  data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s"
                >
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
            <Col
              lg={5}
              md={12}
              sm={12}
              className="align-self-center"
              data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
            >
              <img width="400" src={MainPageBot.src} alt="App" />
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
        <Container>
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
              data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
            >
              <img width="420" src={Recruiter.src} alt="App" />
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
            <Col
              lg={5}
              md={12}
              sm={12}
              className="align-self-center"
              data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
            >
              <img width="400" src={Candidate.src} alt="App" />
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

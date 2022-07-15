import "./Roadmap.module.css";
import { Container, Row, Col } from "react-bootstrap";

const Roadmap = () => {
  const goals = [
    {
      month: "Травень",
      points: ["1-th Зародилася ідея ITinder", "5-th Початок створення боту"],
      complete: true,
    },
    {
      month: "Червень",
      points: ["10-th Тестування", "25-th Початок створення сайту"],
      complete: true,
    },
    {
      month: "Липень",
      points: [
        "- Закриття beta-версії",
        "- Запуск в прод",
        "- Баг-фіксинг",
        "- Будуємо комьюніті",
      ],
      complete: false,
    },
    {
      month: "Серпень",
      points: [
        "Додати : ",
        "- Англійську мову",
        "- Статистику",
        "- Роширити стек",
      ],
      complete: false,
    },
    {
      month: "Вересень",
      points: [
        "Додати преміум аккаунти в ITinder-bot",
        "Створення веб-версії додатку",
      ],
      complete: false,
    },
    {
      month: "Жовтень",
      points: ["Розробка концепції Hire2Earn - наймай, щоб заробляти"],
      complete: false,
    },
  ];

  return (
    <section className="mini" id="work-process">
      <div className="mini-content">
        <Container>
          <Row>
            <Col lg={6} className="offset-lg-3">
              <div className="info">
                <h1>Роадмап</h1>
                <p>
                  Ми плануємо не зупинятися і розширювати функціонал. Створювати
                  ком'юніті і разом рухатися в Web3
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            {goals.map((item) => {
              return (
                <Col lg={2} md={3} sm={6} key={item.month}>
                  <a
                    href="#"
                    className={
                      item.complete ? "mini-box-completed" : "mini-box"
                    }
                  >
                    <strong>{item.month}</strong>
                    {item.points.map((point) => {
                      return <span key={point}>{point}</span>;
                    })}
                  </a>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Roadmap;

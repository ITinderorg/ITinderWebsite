import classes from "./StartLearning.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

const StartLearning = () => {
  return (
    <section className="mini" id="startLearning">
      <div className="mini-content">
        <Container>
          <Row>
            <Col lg={6} className="offset-lg-3">
              <div className="info">
                <h1>Почни вчитися вже сьогодні</h1>
                <p>Обери категорію, що цікавить та ментора</p>
                <div className="center-heading">
                  <Link href="/ITmentor/mentors">
                    <a href="" className={classes.btn}>
                      <span>Всі категорії</span>
                      <div className={classes.transition}></div>
                    </a>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default StartLearning;

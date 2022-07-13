import "./Counter.module.css";
import { Container, Row, Col } from "react-bootstrap";

export async function getServerSideProps() {
  fetch("https://itinder-api.azurewebsites.net/itinder/getstat").then((res) =>
    console.log(res)
  );
  let response = await fetch(
    "https://itinder-api.azurewebsites.net/itinder/getstat"
  );
  console.log(response);
  let data = await response.json();
  console.log(data);
  return {
    props: {
      stats: {
        candidates: data.candidatesCount,
        recruiters: data.recruitersCount,
      },
    },
  };
}

const Counter = ({ stats }) => {
  return (
    <section className="counter">
      <div className="content">
        <Container>
          <Row>
            <Col lg={3} md={6} sm={12}></Col>
            <Col lg={3} md={6} sm={12}>
              <div className="count-item">
                <strong></strong>
                <span>Кандидатів</span>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="count-item">
                <strong></strong>
                <span>Рекрутерів</span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Counter;

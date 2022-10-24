import "./Blog.module.css";
import { Container, Row, Col } from "react-bootstrap";
import KateImg from "../../../../assets/images/kaaaaate.jpg";
import AndryImg from "../../../../assets/images/andyyy.jpg";
import VladImg from "../../../../assets/images/vlad.jpg";
import YuriiImg from "../../../../assets/images/yurii.jpg";

const Blog = () => {
  const people = [
    {
      name: "Kate Riabova",
      description: "Founder ITinder, IT-recruiter",
      linkedInHref: "https://www.linkedin.com/in/kateryna-ryabova-01a90a202/",
      imageSrc: KateImg.src,
    },
    {
      name: "Andrii Borysenko",
      description: "Founder & CEO ITinder, .NET Software Engineer",
      linkedInHref: "https://www.linkedin.com/in/andrii-borysenko-68a8a518a/",
      imageSrc: AndryImg.src,
    },
    {
      name: "Vladyslav Dubovyi",
      description: "Fullstack .NET Engineer",
      linkedInHref: "https://www.linkedin.com/in/vladyslav-dubovyi/",
      imageSrc: VladImg.src,
    },
    {
      name: "Yurii Voskoboinyk",
      description: "Marketing Team Lead",
      linkedInHref: "https://www.linkedin.com/in/yurii-voskoboinyk/",
      imageSrc: YuriiImg.src,
    },
  ];

  return (
    <section className="section" id="blog">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="center-heading">
              <h2 className="section-title">Наша команда</h2>
            </div>
          </Col>
          <Col lg={6} className="offset-lg-3">
            <div className="center-text">
              <p>Рекрутер і IT-шник, що хотіли #EasyHiring</p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {people.map((item) => {
            return (
              <Col lg={6} md={6} sm={12} key={item.name}>
                <div className="blog-post-thumb">
                  <div className="img">
                    <img
                      src={item.imageSrc}
                      width="270"
                      height="360"
                      alt="Blog"
                      title="Blog"
                      loading="lazy"
                    />
                  </div>
                  <div className="blog-content">
                    <h3>
                      <a>{item.name}</a>
                    </h3>
                    <div className="text">{item.description}</div>
                    <br />
                    <a href={item.linkedInHref} className="main-button-slider">
                      Linked In
                    </a>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Blog;

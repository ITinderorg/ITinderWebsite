import { useState } from "react";
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";
import classes from "./MentorCategoriesPage.module.css";
import Link from "next/link";
import { useEffect } from "react";
import ITmentorAPI from "../../../utils/apis/ITmentorAPI";

const MentorCategoriesPage = ({ categories }) => {
  const [searchText, setSearchText] = useState("");
  const [mentors, setMentors] = useState([]);
  const [shownMentors, setShownMentors] = useState(mentors);

  useEffect(() => {
    const fetchData = async () => {
      setMentors(await ITmentorAPI.GetAllMentors());
      setShownMentors(await ITmentorAPI.GetAllMentors());
    };
    fetchData();
  }, []);

  function showFilteredMentors(categoryid) {
    let mentorsToShow = mentors;
    if (categoryid != 0)
      mentorsToShow = mentors.filter((m) => m.categoryid == categoryid);
    setShownMentors(mentorsToShow);
  }

  return (
    <section
      className="section"
      id="mentorCategories"
      style={{ minHeight: 800 }}
    >
      <Container>
        <Row>
          <Col lg={12}>
            <div className="center-heading">
              <h2 className="section-title">Обрати ментора</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={10} md={12} sm={12} className="offset-lg-2">
            <Form.Group className="mb-3" controlId="text">
              <Form.Control
                //value={searchText}
                type="text"
                placeholder="Пошук"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col lg={2} md={2} sm={4}>
            <h4>Категорії</h4>
            <div className={classes.categories_wrapper}>
              {categories.map((item) => {
                return (
                  <a
                    key={item.id}
                    onClick={(e) => showFilteredMentors(item.id)}
                    className={classes.category_link}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </Col>
          <Col lg={10} md={10} sm={8}>
            <Row>
              {shownMentors != undefined && shownMentors.length != 0 ? (
                shownMentors.map((item) => {
                  return (
                    <Col lg={4} md={6} sm={12} key={item.id} className="pb-3">
                      <Card>
                        <Card.Img
                          ariant="top"
                          src={`data:image/jpeg;base64,${item.photo}`}
                        />
                        <Card.Body>
                          <Card.Title>{item.name}</Card.Title>
                          <Card.Text>
                            <strong>{item.position}</strong>
                            <br />
                            {item.skills}
                            <br />
                            {item.price} $
                          </Card.Text>
                          <Link href={"/ITmentor/mentors/" + item.id}>
                            <Button variant="primary">Побачити більше</Button>
                          </Link>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })
              ) : (
                <Row className="text-center">
                  <h3>На жаль, для даної категорії менторів немає :(</h3>
                </Row>
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MentorCategoriesPage;

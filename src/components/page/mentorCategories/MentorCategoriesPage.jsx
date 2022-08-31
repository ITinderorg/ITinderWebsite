import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import classes from "./MentorCategoriesPage.module.css";

const MentorCategoriesPage = () => {
  const [searchText, setSearchText] = useState("");

  const categories = [
    { id: 1, name: "DevOps" },
    { id: 2, name: "Test2" },
    { id: 3, name: "Test3" },
  ];

  const mentors = [
    {
      id: 1,
      name: "Test",
      categoryid: 1,
      description: "test description",
      price: 100,
    },
    {
      id: 2,
      name: "Test2",
      categoryid: 1,
      description: "test description",
      price: 200,
    },
    {
      id: 3,
      name: "Test 3",
      categoryid: 1,
      description: "test description",
      price: 300,
    },
  ];

  return (
    <section className="section" id="mentorCategories">
      <Container>
        <Row>
          <Col lg={10} md={6} sm={6} className="offset-lg-2">
            <Form.Group className="mb-3" controlId="text">
              <Form.Control
                value={searchText}
                type="text"
                placeholder="Пошук"
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col lg={2} md={2} sm={2}>
            <h3>Категорії</h3>
            <div className={classes.categories_wrapper}>
              {categories.map((item) => {
                return (
                  <a
                    key={item.id}
                    onClick={(e) => console.log(item.id)}
                    className={classes.category_link}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </Col>
          <Col lg={10} md={10} sm={10}></Col>
        </Row>
      </Container>
    </section>
  );
};

export default MentorCategoriesPage;

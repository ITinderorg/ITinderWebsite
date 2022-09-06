import { useState, useEffect, useRef } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Card,
  Button,
  Spinner,
} from "react-bootstrap";
import { useObserver } from "../../../utils/hooks/useObserver";
import classes from "./MentorCategoriesPage.module.css";
import Link from "next/link";
import ITmentorAPI from "../../../utils/apis/ITmentorAPI";
import { useFetching } from "../../../utils/hooks/useFetching";
import MultiRangeSlider from "../../global/multiRangeSlider/MultiRangeSlider";

const MentorCategoriesPage = ({ categories }) => {
  const [searchText, setSearchText] = useState("");
  const [mentors, setMentors] = useState([]);
  const [shownMentors, setShownMentors] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const [limit, setLimit] = useState(6);
  const [page, setPage] = useState(1);
  const [mentorsCount, setMentorsCount] = useState(0);
  const lastElement = useRef();

  const [fetchData, isMentorLoading, mentorError] = useFetching(
    async (limit, page, mentors) => {
      setMentorsCount(await ITmentorAPI.GetMentorsCount(categoryId));
      const new_mentors = await ITmentorAPI.GetMentorsByCategory(
        categoryId,
        limit,
        page
      );
      setMentors([...mentors, ...new_mentors]);
    }
  );

  const showFilteredMentors = (categoryId) => {
    setCategoryId(categoryId);
  };

  const filterMentrosByText = (e) => {
    let name = e.target.value;
    if (name == "") setShownMentors(mentors);

    let newShownMentors = mentors.filter((mentor) =>
      mentor.name.includes(name)
    );

    setShownMentors(newShownMentors);
    setSearchText(name);
  };

  const filterMentorsByPrice = ({ min, max }) => {
    let newShownMentors = mentors.filter(
      (mentor) => mentor.price > min && mentor.price < max
    );

    setShownMentors(newShownMentors);
  };

  useObserver(
    lastElement,
    mentors.length < mentorsCount,
    isMentorLoading,
    () => {
      setPage(page + 1);
    }
  );

  useEffect(() => {
    if (page == 1) fetchData(limit, page, []);
    else setPage(1);
  }, [categoryId]);

  useEffect(() => {
    if (page == 1) fetchData(limit, page, []);
    else fetchData(limit, page, mentors);
  }, [page, limit]);

  useEffect(() => {
    setShownMentors(mentors);
  }, [mentors]);

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
                value={searchText}
                onChange={filterMentrosByText}
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
            <h4>Ціна</h4>
            <div className="d-flex">
              <MultiRangeSlider
                onChange={filterMentorsByPrice}
                min={1}
                max={1000}
              />
            </div>
          </Col>
          <Col lg={10} md={10} sm={8}>
            <Row>
              {shownMentors != undefined && shownMentors.length != 0 ? (
                shownMentors.map((item) => {
                  return (
                    <Col lg={4} md={6} sm={12} key={item.id} className="pb-3">
                      <Card style={{ height: 610 }}>
                        <Card.Img
                          ariant="top"
                          src={`data:image/jpeg;base64,${item.photo}`}
                        />
                        <Card.Body>
                          <div className="align-bottom">
                            <Card.Title className="float-bottom">
                              {item.name}
                            </Card.Title>
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
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })
              ) : (
                <Row className="text-center">
                  <h3>На жаль, для цих фільтрів менторів немає :(</h3>
                </Row>
              )}
              {isMentorLoading && (
                <Row className="d-flex justify-content-center">
                  <Spinner
                    animation="border"
                    variant="primary"
                    className={classes.spinner}
                  />
                </Row>
              )}
            </Row>
          </Col>
        </Row>
        <div ref={lastElement} />
      </Container>
    </section>
  );
};

export default MentorCategoriesPage;

import classes from "./KnowledgebasePage.module.css";
import Box from "./box/Box";
import { Row } from "react-bootstrap";

const KnowledgebasePage = () => {
  return (
    <section className="vh-100 section" id="Knowledgebase">
      <Box>
        <Row className="text-center padding-top-70">
          <h1>Інформаційний портал</h1>
        </Row>
        <Row className="padding-top-20 vh-40">
          <h2 className="text-center">
            Тут ви зможете знайти посилання на всі важливі документи
          </h2>
        </Row>
      </Box>
    </section>
  );
};

export default KnowledgebasePage;

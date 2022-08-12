import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Logo from "../../../assets/images/Logo.png";
import Badge from "react-bootstrap/Badge";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src={Logo.src}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          ITinder
        </Navbar.Brand>

        <Nav className="align-items-center">
          <Nav.Link href="/ITpartners">ITpartners</Nav.Link>
          <Nav.Link href="/ITmentor">ITmentor</Nav.Link>
          <Nav.Link href="/">
            ITeach{" "}
            <Badge bg="warning" text="dark">
              Скоро
            </Badge>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;

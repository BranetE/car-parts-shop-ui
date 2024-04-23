import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = (): JSX.Element => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Nav.Link>
          <Link to={"/"}>Home</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to={"/about"}>About</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to={"/bin"}>Bin</Link>
        </Nav.Link>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;

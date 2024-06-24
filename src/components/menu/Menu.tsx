import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Home from "assets/home.svg";
import ShoppingCart from "assets/shopping-cart.svg";
import Logo from "assets/image (4).png";

const Menu = (): JSX.Element => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <img src={Logo} height="40px" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-start">
          <Nav.Link>
            <Link to={"/"}>
              <img src={Home} alt="Home" />
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to={"/bin"}>
              <img src={ShoppingCart} alt="Cart" />
            </Link>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;

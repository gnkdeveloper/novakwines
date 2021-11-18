import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#Home">NovakWines</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#Comprar">Comprar</Nav.Link>
            <Nav.Link href="#Nosotros">Nosotros</Nav.Link>
            <CartWidget></CartWidget>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;

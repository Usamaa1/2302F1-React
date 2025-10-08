import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router';


export const BootstrapNavbar = () => {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/firstComponent">First Component</Nav.Link>
            <Nav.Link as={Link} to="/useStateHook">Use State Hook</Nav.Link>
            <Nav.Link as={Link} to="/useNavHook">Use Nav Hook</Nav.Link>
            <Nav.Link as={Link} to="/useRefHook">Use Ref Hook</Nav.Link>
            <Nav.Link as={Link} to="/useEffect">Use Effect</Nav.Link>
            <Nav.Link as={Link} to="/formValidation">Form Validation</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
  )
}

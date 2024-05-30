import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Header.css"
import React from 'react'

const Header = () => {
  return (
    <Navbar expand="sm" className="bg-body-tertiary  principal">
    <Container fluid className='container'>
      <Navbar.Brand href="#" className='logo-titulo'>
        <img src="./public/img/onda.png" className='logo' alt="logo"/>
        <p className='embalamar'>Embalamar</p>
      
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Sobre</Nav.Link>
          <NavDropdown title="Produtos" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Garrafas Pets</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Canudinhos
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Copos
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#" disabled>
            Contato
          </Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control 
            type="search"
            placeholder="Buscar produtos"
            className="me-2 input"
            aria-label="Search"
          />
          <Button className='button-procurar'>Procurar</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header
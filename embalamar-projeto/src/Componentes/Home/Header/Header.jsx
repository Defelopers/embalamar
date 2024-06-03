import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Header.css"
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Sobre from '../../Sobre/Sobre';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <>
      <Navbar expand="xl" className="bg-body-tertiary  principal">
        <Container fluid className='container'>
          <Navbar.Brand href="#" className='logo-titulo'>
            <img src="./public/img/onda.png" className='logo' alt="logo" />
            <p className='embalamar'>Embalamar</p>

          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/" className='nav-p'>Home</Nav.Link>
              <Nav.Link as={Link} to="/sobre" className='nav-p'>Sobre</Nav.Link>
              <NavDropdown title="Produtos" id="navbarScrollingDropdown" className='nav-p'>
                <div className='d-flex'>
                  <div>
                    <NavDropdown.Item href="#action3">Garrafas</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Canudinho</NavDropdown.Item>

                    <NavDropdown.Divider />

                    <NavDropdown.Item href="#action5">Sacolas reutilizáveis</NavDropdown.Item>
                    <NavDropdown.Item href="#action5">Embalagens para FastFood</NavDropdown.Item>
                  </div>
                  <div>
                    <NavDropdown.Item href="#action3">Recipientes para alimentos</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Filmes</NavDropdown.Item>

                    <NavDropdown.Divider />

                    <NavDropdown.Item href="#action5">Embalagems de suco</NavDropdown.Item>
                    <NavDropdown.Item href="#action5">Talheres</NavDropdown.Item>
                  </div>
                </div>



              </NavDropdown>
              <Nav.Link href="#contato" className='nav-p'>
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
              <div className='btns'>
              <Button className='button-procurar'>Procurar</Button>
              
              <Button className='btn-cadastro'>Cadastrar</Button>
              <Button  className='btn-login'>Login</Button>
              </div>
             
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>
        <Routes>
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </div>
    </>

  )
}

export default Header
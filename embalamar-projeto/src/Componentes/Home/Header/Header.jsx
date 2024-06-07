import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Header.css"
import "/src/styles/style.css"
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Sobre from '../../Sobre/Sobre';
import { Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';


const Header = () => {


  const [name, setName] = useState()
  const [profilePic, setProfilePic] = useState()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const responseGoogle = (response) => {
    console.log(response);
    const { profileObj: { name, imageUrl } } = response;
    setName(name);
    setProfilePic(imageUrl);
    setIsLoggedIn(true)
  }


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
              <Nav.Link href="/produtos" className='nav-p'>Produtos</Nav.Link>
              <Nav.Link href="/contato" className='nav-p'>
                Contato
              </Nav.Link>

            </Nav>

            <Form className="d-flex  search-form">
              <Form.Control
                type="search"
                placeholder="Buscar produtos"
                className="me-2 input"
                aria-label="Search"
              />
              <div className='d-flex gap-3'>
                <Button className='button-procurar'>Procurar</Button>
                {/* <Button className='btn-cadastro'>Cadastrar</Button> */}
                <div className='google-login'>
                  <GoogleLogin 
                    onSuccess={(credentialResponse) => {
                      console.log(credentialResponse)
                    }}
                    onError={() => {
                      console.log("Login Failed");
                    }}

                  />
                </div>
              </div>



            </Form>


          </Navbar.Collapse>
        </Container>
      </Navbar >

      <div>

      </div>
    </>

  )
}

export default Header
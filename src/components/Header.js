import React from 'react'
import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';
function Header(props) {
  
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto my-2 my-lg-8"
      style={{maxHeight:'100px'}}
      navbarScroll
      >
        {
          props.headerLinks.map(ele=>(
            <Nav.Link href="#action1">{ele}</Nav.Link>
          ))
        }
     </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default Header

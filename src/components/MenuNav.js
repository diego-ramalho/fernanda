
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const MenuNav = () => {

  var isDarkModeUser = window.matchMedia("(prefers-color-schema:dark)").matches;
  //console.log(isDarkModeUser);
  
  const handleToggle = event => {
    var toggleBtn = document.querySelector(".navbar-toggler");

    if (window.getComputedStyle(toggleBtn).display !== "none") 
      toggleBtn.click();
  };

  const themeToggle = event => {
    var body = document.querySelector("body");
    //body.classList.toggle("dark-theme");

    if(body.dataset.theme == "dark")
        body.setAttribute("data-theme", "light");
    else
      body.setAttribute("data-theme", "dark");

    /* if(body.classList.contains("dark-theme"))
      document.querySelector(".fas.fa-adjust").title = "Tema claro";
    else
      document.querySelector(".fas.fa-adjust").title = "Tema escuro"; */

    //document.querySelector(".fas.fa-toggle-on").classList.toggle("hidden");
    //document.querySelector(".fas.fa-toggle-off").classList.toggle("hidden");
  };

  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
      <Navbar.Brand href="#home"><i className="fas fa-gem me-3"></i>Company</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav"> 
        <Nav className="me-auto">
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/" onClick={handleToggle}>Home</Nav.Link>
          <Nav.Link as={Link} to="/about" onClick={handleToggle}>About</Nav.Link>
          <Nav.Link href="#contact" onClick={handleToggle}>Contact</Nav.Link>
          <Nav.Link onClick={themeToggle}><i className="fas fa-adjust" title="Tema escuro"></i></Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MenuNav;
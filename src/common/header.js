import bootstrap from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Container,Nav} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../common/header.css";

import codestation from "../pictures/logo.png";

export function Header() {
  return (
    <>
   
      <Navbar collapseOnSelect expand="lg "  bg="white py-3 shadow-sm" variant="white">
        <Container className="Nav">
        <div className="image">
    <Navbar.Brand href="#home" >
      <img
        src={codestation}
        width="60"
        height="60"
     />   
    </Navbar.Brand>
    </div>
          <Navbar.Brand to="/home" >CODE STATION</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav " />
          <Navbar.Collapse id="responsive-navbar-nav  ">
                <Nav className="ms-auto ">
                <NavLink className="nav-link " to="/home">Home</NavLink>
                <NavLink className="nav-link " to="/about">About Us</NavLink>
                <NavLink className="nav-link " to="/service">Our Service</NavLink>
                <NavLink className="nav-link " to="/contact-us">Contact</NavLink>
                </Nav>
            <Nav>
              
                <NavLink className="nav-link" to="/team">Our Team </NavLink>
                
                
             </Nav>
            
             
             
         
          </Navbar.Collapse>
        </Container>
      </Navbar>
  
    </>
  );
}

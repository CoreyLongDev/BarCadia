import React from "react";
import "./Header.css";
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
import Logo from '../Header/barcadiaLogo.png'

const Header = () => {
    return(
        <>
        <img id="logo" src={Logo} />
        <h1 id="header">Barcadia</h1>
        <br />
        <Navbar>
            <Container className="Navi">
            <Nav.Link href="./">Home</Nav.Link>
            <Nav.Link href="./Play">Play</Nav.Link>
            <Nav.Link href="./Reload">Reload</Nav.Link>
            <Nav.Link href="./Events">Events</Nav.Link>
            {/* <Nav.Link href="./About">About Us</Nav.Link> */}
            <NavDropdown title="About" id="basic-nav-dropdown" >
              <NavDropdown.Item id="testing" href="./Connect">Connect with US</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
            </Container>
        </Navbar>
        </>
    )
}

export default Header;
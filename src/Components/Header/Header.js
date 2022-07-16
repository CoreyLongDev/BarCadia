import React from "react";
import "./Header.css";
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
import Logo from '../Header/barcadiaLogo.png'

const Header = () => {
    return(
        <>
        <img id="logo" src={Logo} alt=''/>
        <h1 id="header">Barcadia</h1>
        <br />
        <Navbar>
            <Container className="Navi">
              <Nav.Link href="./">Home</Nav.Link>
              <Nav.Link href="./Play">Play</Nav.Link>
              <Nav.Link href="./Reload">Reload</Nav.Link>
              <Nav.Link href="./Events">Events</Nav.Link>
              <NavDropdown title="About" id="basic-nav-dropdown" >
              <NavDropdown.Item className="dropDown" href="./About">The App</NavDropdown.Item>
              <NavDropdown.Item className="dropDown" href="./Upcoming">Upcoming Changes</NavDropdown.Item>
              <NavDropdown.Item className="dropDown" href="./Connect">Connect with US</NavDropdown.Item>
              </NavDropdown>
            </Container>
        </Navbar>
        </>
    )
}

export default Header;
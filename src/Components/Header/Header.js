import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { Nav, Navbar, Container } from 'react-bootstrap'

const Header = () => {
    return(
        <>
        <h1 id="header">Barcadia</h1>

        <Navbar bg='light' variant='light'>
            <Container>
            <Nav.Link href="./Home">Home</Nav.Link>
            <Nav.Link href="./Play">Play</Nav.Link>
            <Nav.Link href="./Reload">Reload</Nav.Link>
            <Nav.Link href="./Events">Events</Nav.Link>
            <Nav.Link href="./About">About Us</Nav.Link>
            </Container>
        </Navbar>
        </>
    )
}

export default Header;
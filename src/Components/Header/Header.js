import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'

const Header = () => {
    return(
        <>
        <h1 id="header">Barcadia</h1>
        <ul className="navBar">
            <li><a href="./Play">Play</a></li>
            <li><a href="./Reload">Reload</a></li>
            <li><a href="./Events">Events</a></li>
            <li><a href="./About">About Us</a></li>
            <Button>Brah</Button>
        </ul>
        </>
    )
}

export default Header;
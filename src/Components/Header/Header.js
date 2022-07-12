import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return(
        <>
        <h1 id="header">Barcadia</h1>
        <ul className="navBar">
            <li><a href="./Play">Play</a></li>
            <li><a href="./Drink">Drink</a></li>
            <li><a href="./Events">Events</a></li>
            <li><a href="./About">About Us</a></li>
        </ul>
        </>
    )
}

export default Header;
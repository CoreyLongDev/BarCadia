import React from "react";
import LockedDoor from '../Images/404.png'
import '../App.css'

const NotFoundPage = () => {
    return(
        <img id="theDoor" src={LockedDoor} alt="closed and locked door" />
    )
}

export default NotFoundPage
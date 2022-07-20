import React from "react";
import { useState, useEffect } from "react";

const Reload = () => {

    const [beers, setBeers] = useState([])

useEffect(() => {
    fetch('http://localhost:4000/api/v1/getBeers')
    .then(res => res.json())

    .then(
        data => {
            console.log(data)
            setBeers(data)
        }
    )
},[])


    return(
        <>
        <p>Heu is this showing</p>
       { beers.map((beer, index) => {
            return (
            
                <p key={index}>{beer.name}</p>
            )
        })}
        </>
    )
}






export default Reload;
import React from "react";
import { useState, useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";
import LockedDoor from '../Images/404.png'

const Reload = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/v1/getBeers")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBeers(data);
      });
  }, []);

  return (
    <>
      
      {beers.map((beer, index) => {
        return <Card className="cards" key={index}>
        <Card.Img variant="top" src={beer.img} />
        {beer.name} &nbsp;|&nbsp;
        {beer.style} &nbsp;|&nbsp;
        {beer.abr}% &nbsp;|&nbsp; 
        <span style={{color: 'green'}}>$ </span> {beer.price}
        
        </Card>;
        
      })}
      
    </>
  );
};

export default Reload;
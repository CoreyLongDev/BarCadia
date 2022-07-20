import React from "react";
import { useState, useEffect } from "react";

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
        return <div className="cards" key={index}>
        {beer.name}  &nbsp;|&nbsp;
        {beer.style} &nbsp;|&nbsp;
        {beer.abr}%  &nbsp;|&nbsp; <span style={{color: 'green'}}>$ </span>
        {beer.price}
        
        </div>;
        
      })}
    </>
  );
};

export default Reload;

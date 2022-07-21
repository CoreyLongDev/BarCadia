import React from "react";
import { useState, useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";

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
    <div id="cardWrapper">
      {beers.map((beer, index) => {
        return (
          <Card className="cards" key={index}>
            <Card.Img
              variant="top"
              src={beer.img}
              style={{ maxWidth: "250px", maxHeight: "250px" }}
            />
            <Card.Body>
              <Card.Title>{beer.name}</Card.Title>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>{beer.style}</ListGroup.Item>
                <ListGroup.Item>
                  <span style={{ color: "orange" }}>{beer.abr} %</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <span style={{ color: "green" }}>$ {beer.price}</span>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
            <Card.Body>
              <Card.Link id="orderBeer" href="#"> &nbsp;&nbsp;ORDER&nbsp;&nbsp; </Card.Link>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default Reload;

import React from "react";
import { useState, useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";
import Controller from '../Images/multiplayerIcon.png'

const Reload = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/v1/getGames")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGames(data);
      });
  }, []);

  return (
    <>
    <h1 className="pageTitler">Current Games List</h1>
    <div id="cardWrapperGames">
      {games.map((game, index) => {
        return (
          <Card className="cards" key={index}>
            <Card.Img
              variant="top"
              src={game.img}
              style={{ maxHeight: "300px" }}
            />
            <Card.Body style={{minWidth: '300px', maxWidth: '300px',  maxHeight: "250px" }}>
              <Card.Title>{game.name}</Card.Title>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>{game.type}</ListGroup.Item>
                <ListGroup.Item>
                  <span><img id="controller" src={Controller} alt="game controller" />{game.maxplayers}</span>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        );
      })}
    </div>
    </>
  );
};

export default Reload;

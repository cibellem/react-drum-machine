import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Drum() {
  const letterSounds = [
    {
      letter: "Q",
      sound: "beep",
    },
    {
      letter: "W",
      sound: "clap",
    },
    {
      letter: "E",
      sound: "bell",
    },
    {
      letter: "A",
      sound: "cough",
    },
    {
      letter: "S",
      sound: "firecrackers",
    },
    {
      letter: "D",
      sound: "pew",
    },
    {
      letter: "Z",
      sound: "egg-cracking",
    },
    {
      letter: "X",
      sound: "sush",
    },
    {
      letter: "C",
      sound: "neck-snap",
    },
  ];

  function handleClick(item) {
    console.log(item.target);
  }
  return (
    <Container id="drum-machine" className="p-3">
      <Jumbotron id="display">
        <p>You pressed: </p>

        <Row>
          {letterSounds.map((item) => (
            <Col>
              {" "}
              <div
                onClick={(item) => handleClick(item)}
                key={item.letter}
                id={item.sound}
                className="drumpad"
              >
                <kbd>{item.letter}</kbd>
                <audio id={item.letter} src="" className="clip"></audio>
              </div>
            </Col>
          ))}
        </Row>
      </Jumbotron>
    </Container>
  );
}

export default Drum;

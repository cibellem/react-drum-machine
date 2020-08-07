import React, { useState, useEffect } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

//got the audios from FCC

const letterSounds = [
  {
    letter: "Q",
    sound: "Heater",
    key: 81,
    media: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    letter: "W",
    sound: "Heater v2",
    key: 87,
    media: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    letter: "E",
    sound: "Heater v4",
    key: 69,
    media: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    letter: "A",
    sound: "Heater v3",
    key: 65,
    media: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    letter: "S",
    sound: "Heater v6",
    key: 65,
    media: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    letter: "D",
    sound: "Kick 'n Hat",
    key: 68,
    media: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    letter: "Z",
    sound: "Kick",
    key: 90,
    media: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    letter: "X",
    sound: "Shush",
    key: 88,
    media: require("./sounds/shush.wav"),
  },
  {
    letter: "C",
    sound: "Cymbal",
    key: 67,
    media: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

function Drum() {
  //set initial display
  const [display, setDisplay] = useState("");

  useEffect(() => {
    //add  listener for user's keydown
    window.addEventListener("keydown", drumPlay);
    return () => {
      window.removeEventListener("keydown", drumPlay);
    };
  }, []);

  const drumPlay = (e) => {
    //check if action was by keydown or click
    let keyEntered = e.key ? e.key.toUpperCase() : e.target.innerText;
    let letterObj = letterSounds.filter((item) => item.letter === keyEntered);
    letterObj.forEach((item) => {
      setDisplay(item.sound);
      let audio = document.getElementById(keyEntered);
      audio.currentTime = 0;
      audio.play();
    });
  };

  return (
    <Container id="drum-machine" className="p-3">
      <Jumbotron className="jumbotron" id="display">
        <h3 className="text-center">React Drum Machine</h3>
        <h5 className="text-center">Listening to: {display}</h5>
        <Row className=" justify-content-center ">
          {letterSounds.map((item) => (
            <Col md={2} className="colum-drums  ">
              <div
                onClick={(e) => drumPlay(e)}
                key={item.key}
                id={item.sound}
                className="drum-pad"
                value={item.letter}
              >
                <h4>{item.letter}</h4>
                <audio
                  id={item.letter}
                  src={item.media}
                  className="clip"
                ></audio>
              </div>
            </Col>
          ))}
        </Row>
      </Jumbotron>
      <h5 className="text-center mt-5">Cibelle Montor 2020</h5>
    </Container>
  );
}

export default Drum;

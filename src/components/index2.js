import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const letterSounds = [
  {
    sound: "Heater-1",
    letter: "Q",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },

  {
    sound: "Heater-2",
    letter: "W",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },

  {
    sound: "Heater-3",
    letter: "E",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },

  {
    sound: "Heater-4",
    letter: "A",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },

  {
    sound: "Clap",
    letter: "S",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },

  {
    sound: "Open-HH",
    letter: "D",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },

  {
    sound: "Kick-'n-Hat",
    letter: "Z",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },

  {
    name: "Kick",
    key: "X",
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },

  {
    sound: "Closed-HH",
    letter: "C",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

f  constructor(props) {
    super(props);
    this.state = {
      display: "",
    };
    // this.handleKeyPress = this.handleKeyPress.bind(this);
    // this.handleClick = this.handleClick.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }
  handleClick = (e) => {
    this.setState({
      display: e.target.id,
    });

    const id = e.target.innerText.trim();
    const audio = this.refs[id];
    audio.play();
  };

  handleKeyPress = (e) => {
    if (e.key) {
      const letter = this.props.letterSounds.find(
        (el) => el.key == e.key.toUpperCase()
      ).name;
      this.setState({
        display: letter,
      });
      const audio = document.getElementById(e.key.toUpperCase());
      audio ? audio.play() : "";
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  render() {
    let drumMachine = letterSounds.map((item) => (
      <div
        onClick={this.handleClick}
        key={item.key}
        id={item.sound}
        className="drum-pad"
        value={item.letter}
      >
        <h5>{item.letter}</h5>
        <audio id={item.letter} src="" className="clip"></audio>
      </div>
    ));

    // let drumPad = this.props.letterSounds.map((item) => (
    //   <div className="drum-pad" onClick={this.handleClick} id={item.name}>
    //     {item.key}
    //     <audio
    //       className="clip"
    //       ref={item.key}
    //       id={item.key}
    //       src={item.src}
    //     ></audio>
    //   </div>
    // ));

    return (
      <Container id="drum-machine">
        <h1>React Drum Machine</h1>
        <Jumbotron id="display">
          <Row>{drumMachine}</Row>
        </Jumbotron>
      </Container>
    );
  }
}

export default Drum;

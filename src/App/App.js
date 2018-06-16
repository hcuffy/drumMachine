import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Board from './Components/board.js';

class App extends Component {
  constructor(props) {
   super(props);

   this.state = {
    audioLabel : ''
   };
   this.drumAudioQ = this.drumAudioQ.bind(this);
   this.q_Audio  = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
   this.drumAudioW = this.drumAudioW.bind(this);
   this.w_Audio  = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
   this.drumAudioE = this.drumAudioE.bind(this);
   this.e_Audio  = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
   this.drumAudioA = this.drumAudioA.bind(this);
   this.a_Audio  = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
   this.drumAudioS = this.drumAudioS.bind(this);
   this.s_Audio  = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
   this.drumAudioD = this.drumAudioD.bind(this);
   this.d_Audio  = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
   this.drumAudioZ = this.drumAudioZ.bind(this);
   this.z_Audio  = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
   this.drumAudioX = this.drumAudioX.bind(this);
   this.x_Audio  = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
   this.drumAudioC = this.drumAudioC.bind(this);
   this.c_Audio  = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
}


  drumAudioQ() {
    let { audioLabel } = this.state;
    this.setState({
      audioLabel: 'Q'
    });
    this.q_Audio.play();
  }

  drumAudioW() {
    let { audioLabel } = this.state;
    this.setState({
      audioLabel: 'W'
    });
    this.w_Audio.play();
  }

  drumAudioE() {
    let { audioLabel } = this.state;
    this.setState({
      audioLabel: 'E'
    });
    this.e_Audio.play();
  }
  drumAudioA() {
    let { audioLabel } = this.state;
    this.setState({
      audioLabel: 'A'
    });
    this.a_Audio.play();
  }
  drumAudioS() {
    let { audioLabel } = this.state;
    this.setState({
      audioLabel: 'S'
    });
    this.s_Audio.play();
  }
  drumAudioD() {
    let { audioLabel } = this.state;
    this.setState({
      audioLabel: 'D'
    });
    this.d_Audio.play();
  }

  drumAudioZ() {
    let { audioLabel } = this.state;
    this.setState({
      audioLabel: 'Z'
    });
    this.z_Audio.play();
  }

  drumAudioX() {
    let { audioLabel } = this.state;
    this.setState({
      audioLabel: 'X'
    });
    this.x_Audio.play();
  }

  drumAudioC() {
    let { audioLabel } = this.state;
    this.setState({
      audioLabel: 'C'
    });
    this.c_Audio.play();
  }

  render() {
    return (
      <div id="drum-machine" className="App">
         <header>
            <h1>Drum Machine</h1>
         </header>
        <div id="display">
            <Board
             drumAudioQ={this.drumAudioQ}
             drumAudioW={this.drumAudioW}
             drumAudioE={this.drumAudioE}
             drumAudioA={this.drumAudioA}
             drumAudioS={this.drumAudioS}
             drumAudioD={this.drumAudioD}
             drumAudioZ={this.drumAudioZ}
             drumAudioX={this.drumAudioX}
             drumAudioC={this.drumAudioC}
            />
            <div>
            <label>{this.state.audioLabel}</label>
            </div>
        </div>
      </div>
    );
  }
}



export default App;

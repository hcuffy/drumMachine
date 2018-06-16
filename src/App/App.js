import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Board from './Components/board.js';
import soundFile from './Audio/Gramophone.mp3';

class App extends Component {
  constructor(props) {
   super(props);

   this.state = {
    audioLabel : '',
    volume : '0.5'
   };

   this.drumAudioQ = this.drumAudioQ.bind(this);
   this.q_Audio  = new Audio(soundFile);
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
   this.updateVolume = this.updateVolume.bind(this);
}


  drumAudioQ() {
    let { volume } = this.state;
    this.setState({
      audioLabel: 'Q'
    });
    this.q_Audio.volume = volume;
    this.q_Audio.play();
  }

  drumAudioW() {
    let { volume } = this.state;
    this.setState({
      audioLabel: 'W'
    });
    this.w_Audio.volume = volume;
    this.w_Audio.play();
  }

  drumAudioE() {
    let { volume } = this.state;
    this.setState({
      audioLabel: 'E'
    });
    this.e_Audio.volume = volume;
    this.e_Audio.play();
  }
  drumAudioA() {
    let { volume } = this.state;
    this.setState({
      audioLabel: 'A'
    });
    this.a_Audio.volume = volume;
    this.a_Audio.play();
  }
  drumAudioS() {
    let { volume } = this.state;
    this.setState({
      audioLabel: 'S'
    });
    this.s_Audio.volume = volume;
    this.s_Audio.play();
  }
  drumAudioD() {
    let { volume } = this.state;
    this.setState({
      audioLabel: 'D'
    });
    this.d_Audio.volume = volume;
    this.d_Audio.play();
  }

  drumAudioZ() {
    let { volume } = this.state;
    this.setState({
      audioLabel: 'Z'
    });
    this.z_Audio.volume = volume;
    this.z_Audio.play();
  }

  drumAudioX() {
    let { volume } = this.state;
    this.setState({
      audioLabel: 'X'
    });
    this.x_Audio.volume = volume;
    this.x_Audio.play();
  }

  drumAudioC() {
    let { volume } = this.state;
    this.setState({
      audioLabel: 'C'
    });
    this.c_Audio.volume = volume;
    this.c_Audio.play();
  }

  updateVolume(e) {
      this.setState({
        volume: e.target.value
      });

    }
  render() {
    return (
      <div id="drum-machine" className="App">
         <header>
            <h1>Drum Machine with React</h1>
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
          <div className="App-speed">
          <span>Volume Control</span>
            <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={this.state.volume}
            onChange={this.updateVolume}
          />
          </div>
        </div>
      </div>
    );
  }
}



export default App;

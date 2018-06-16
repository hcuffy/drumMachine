import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Board from './Components/board.js';
import BASS_SCRAPE from './Audio/Bass_Scrape.mp3';
import CABASSAS from './Audio/Cabassas.mp3';
import DRUMSCONGA from './Audio/DrumsConga.mp3';
import GRAMOPHONE from './Audio/Gramophone.mp3';
import RACTHET from './Audio/RatchetPercussion.mp3';
import SCRAPES from './Audio/ScrapesPercussion.mp3';
import SNAREDRUM from './Audio/SnareDrum.mp3';
import TAMBOURINE from './Audio/Tambourine.mp3';
import WASHBOARD from './Audio/Washboard.mp3';


class App extends Component {
  constructor(props) {
   super(props);

   this.state = {
    audioLabel : '',
    volume : '0.5'
   };

   this.drumAudioQ = this.drumAudioQ.bind(this);
   this.q_Audio  = new Audio(BASS_SCRAPE);
   this.drumAudioW = this.drumAudioW.bind(this);
   this.w_Audio  = new Audio(CABASSAS);
   this.drumAudioE = this.drumAudioE.bind(this);
   this.e_Audio  = new Audio(DRUMSCONGA);
   this.drumAudioA = this.drumAudioA.bind(this);
   this.a_Audio  = new Audio(GRAMOPHONE);
   this.drumAudioS = this.drumAudioS.bind(this);
   this.s_Audio  = new Audio(RACTHET);
   this.drumAudioD = this.drumAudioD.bind(this);
   this.d_Audio  = new Audio(SCRAPES);
   this.drumAudioZ = this.drumAudioZ.bind(this);
   this.z_Audio  = new Audio(SNAREDRUM);
   this.drumAudioX = this.drumAudioX.bind(this);
   this.x_Audio  = new Audio(TAMBOURINE);
   this.drumAudioC = this.drumAudioC.bind(this);
   this.c_Audio  = new Audio(WASHBOARD);
   this.updateVolume = this.updateVolume.bind(this);
}


  drumAudioQ() {
    let { volume } = this.state;
    this.setState({
      audioLabel: 'BASS_SCRAPE'
    });
    this.q_Audio.volume = volume;
    this.q_Audio.play();
  }

  drumAudioW() {
    let { volume } = this.state;
    this.setState({
      audioLabel: 'CABASSAS'
    });
    this.w_Audio.volume = volume;
    this.w_Audio.play();
  }

  drumAudioE() {
    let { volume } = this.state;
    this.setState({
      audioLabel: 'DRUMSCONGA'
    });
    this.e_Audio.volume = volume;
    this.e_Audio.play();
  }
  drumAudioA() {
    let { volume } = this.state;
    this.setState({
      audioLabel: 'GRAMOPHONE'
    });
    this.a_Audio.volume = volume;
    this.a_Audio.play();
  }
  drumAudioS() {
    let { volume } = this.state;
    this.setState({
      audioLabel: 'RACTHET'
    });
    this.s_Audio.volume = volume;
    this.s_Audio.play();
  }
  drumAudioD() {
    let { volume } = this.state;
    this.setState({
      audioLabel: 'SCRAPES'
    });
    this.d_Audio.volume = volume;
    this.d_Audio.play();
  }

  drumAudioZ() {
    let { volume } = this.state;
    this.setState({
      audioLabel: 'SNAREDRUM'
    });
    this.z_Audio.volume = volume;
    this.z_Audio.play();
  }

  drumAudioX() {
    let { volume } = this.state;
    this.setState({
      audioLabel: 'TAMBOURINE'
    });
    this.x_Audio.volume = volume;
    this.x_Audio.play();
  }

  drumAudioC() {
    let { volume } = this.state;
    this.setState({
      audioLabel: 'WASHBOARD'
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
          <span class="volume-control">Volume Control</span>
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
        <span>Audio files were precured from: <a href="http://www.freesfx.co.uk/" target="_blank">FreeSFX
          </a></span>
      </div>
    );
  }
}

export default App;

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
      audioLabel: '',
      volume: '0.5'
    };

    this.drumClipQ = this.drumClipQ.bind(this);
    this.q_clip = new Audio(BASS_SCRAPE);
    this.drumClipW = this.drumClipW.bind(this);
    this.w_clip = new Audio(CABASSAS);
    this.drumClipE = this.drumClipE.bind(this);
    this.e_clip = new Audio(DRUMSCONGA);
    this.drumClipA = this.drumClipA.bind(this);
    this.a_clip = new Audio(GRAMOPHONE);
    this.drumClipS = this.drumClipS.bind(this);
    this.s_clip = new Audio(RACTHET);
    this.drumClipD = this.drumClipD.bind(this);
    this.d_clip = new Audio(SCRAPES);
    this.drumClipZ = this.drumClipZ.bind(this);
    this.z_clip = new Audio(SNAREDRUM);
    this.drumClipX = this.drumClipX.bind(this);
    this.x_clip = new Audio(TAMBOURINE);
    this.drumClipC = this.drumClipC.bind(this);
    this.c_clip = new Audio(WASHBOARD);
    this.updateVolume = this.updateVolume.bind(this);
  }


  drumClipQ() {
    let { volume } = this.state;
    this.setState({
      audioLabel: 'BASS_SCRAPE'
    });
    this.q_clip.volume = volume;
    this.q_clip.play();
  }

  drumClipW() {
    let { volume } = this.state;
    this.setState({
      audioLabel: 'CABASSAS'
    });
    this.w_clip.volume = volume;
    this.w_clip.play();
  }

  drumClipE() {
    let { volume } = this.state;
    this.setState({
      audioLabel: 'DRUMSCONGA'
    });
    this.e_clip.volume = volume;
    this.e_clip.play();
  }
  drumClipA() {
    let { volume } = this.state;
    this.setState({
      audioLabel: 'GRAMOPHONE'
    });
    this.a_clip.volume = volume;
    this.a_clip.play();
  }
  drumClipS() {
    let { volume } = this.state;
    this.setState({
      audioLabel: 'RACTHET'
    });
    this.s_clip.volume = volume;
    this.s_clip.play();
  }
  drumClipD() {
    let { volume } = this.state;
    this.setState({
      audioLabel: 'SCRAPES'
    });
    this.d_clip.volume = volume;
    this.d_clip.play();
  }

  drumClipZ() {
    let { volume } = this.state;
    this.setState({
      audioLabel: 'SNAREDRUM'
    });
    this.z_clip.volume = volume;
    this.z_clip.play();
  }

  drumClipX() {
    let { volume } = this.state;
    this.setState({
      audioLabel: 'TAMBOURINE'
    });
    this.x_clip.volume = volume;
    this.x_clip.play();
  }

  drumClipC() {
    let { volume } = this.state;
    this.setState({
      audioLabel: 'WASHBOARD'
    });
    this.c_clip.volume = volume;
    this.c_clip.play();
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
             drumClipQ={this.drumClipQ}
             drumClipW={this.drumClipW}
             drumClipE={this.drumClipE}
             drumClipA={this.drumClipA}
             drumClipS={this.drumClipS}
             drumClipD={this.drumClipD}
             drumClipZ={this.drumClipZ}
             drumClipX={this.drumClipX}
             drumClipC={this.drumClipC}
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
        <span>Audio files were precured from: <a href="http://www.freesfx.co.uk/" target="_blank" rel="noopener noreferrer">FreeSFX
          </a></span>
      </div>
    );
  }
}

export default App;

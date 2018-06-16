import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Board from './Components/board.js';

class App extends Component {
  constructor(props) {
   super(props);

   this.state = {

   };
   this.drumAudioQ = this.drumAudioQ.bind(this);
}

 drumAudioQ(){



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
        />
        </div>
      </div>
    );
  }
}



export default App;

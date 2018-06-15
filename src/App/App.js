import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
   super(props);

   this.state = {
     helloWorld: "Hello World"
   };
}


  render() {
    return (
      <div className="App">
        <header>
          <h1>{this.state.helloWorld}</h1>
        </header>
      </div>
    );
  }
}

export default App;

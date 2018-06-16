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
      <div id="drum-machine" className="App">
        <div id="display">
        <table>

 <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
</table>
        </div>
      </div>
    );
  }
}



export default App;

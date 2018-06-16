import React from 'react';
import '../App.css';


const Board = (props) => {

  return (<table className="table">
     <tr>
        <td id="drumQ" class="drum-pad"><button type="button" class="btn btn-info" onClick={props.drumAudioQ}>Q</button></td>
        <td id="drumW" class="drum-pad"><button type="button" class="btn btn-info" onClick={props.drumAudioQ}>W</button></td>
        <td id="drumE" class="drum-pad"><button type="button" class="btn btn-info" onClick={props.drumAudioQ}>E</button></td>
      </tr>
      <tr>
        <td id="drumA" class="drum-pad"><button type="button" class="btn btn-info" onClick={props.drumAudioQ}>A</button></td>
        <td id="drumS" class="drum-pad"><button type="button" class="btn btn-info" onClick={props.drumAudioQ}>S</button></td>
        <td id="drumD" class="drum-pad"><button type="button" class="btn btn-info" onClick={props.drumAudioQ}>D</button></td>
      </tr>
      <tr>
        <td id="drumZ" class="drum-pad"><button type="button" class="btn btn-info" onClick={props.drumAudioQ}>Z</button></td>
        <td id="drumX" class="drum-pad"><button type="button" class="btn btn-info" onClick={props.drumAudioQ}>X</button></td>
        <td id="drumC" class="drum-pad"><button type="button" class="btn btn-info" onClick={props.drumAudioQ}>C</button></td>
      </tr>

  </table>);
}

export default Board;

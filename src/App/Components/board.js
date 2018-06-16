import React from 'react';
import './components.css';


const Board = (props) => {

  return (<table className="table">
     <tr>
        <td id="drumQ" class="drum-pad"><button type="button" class="btn btn-info" onClick={props.drumAudioQ}>Q</button></td>
        <td id="drumW" class="drum-pad"><button type="button" class="btn btn-info" onClick={props.drumAudioW}>W</button></td>
        <td id="drumE" class="drum-pad"><button type="button" class="btn btn-info" onClick={props.drumAudioE}>E</button></td>
      </tr>
      <tr>
        <td id="drumA" class="drum-pad"><button type="button" class="btn btn-info" onClick={props.drumAudioA}>A</button></td>
        <td id="drumS" class="drum-pad"><button type="button" class="btn btn-info" onClick={props.drumAudioS}>S</button></td>
        <td id="drumD" class="drum-pad"><button type="button" class="btn btn-info" onClick={props.drumAudioD}>D</button></td>
      </tr>
      <tr>
        <td id="drumZ" class="drum-pad"><button type="button" class="btn btn-info" onClick={props.drumAudioZ}>Z</button></td>
        <td id="drumX" class="drum-pad"><button type="button" class="btn btn-info" onClick={props.drumAudioX}>X</button></td>
        <td id="drumC" class="drum-pad"><button type="button" class="btn btn-info" onClick={props.drumAudioC}>C</button></td>
      </tr>

  </table>);
}

export default Board;

import React from 'react';
import '../App.css';


const Board = (props) => {

  return (<table className="table table-striped table-bordered">
     <tr>
        <td><button type="button" class="btn btn-info drum-pad" onClick={props.drumAudioQ}>Q</button></td>
        <td><button type="button" class="btn btn-info drum-pad" onClick={props.drumAudioQ}>W</button></td>
        <td><button type="button" class="btn btn-info drum-pad" onClick={props.drumAudioQ}>E</button></td>
      </tr>
      <tr>
        <td><button type="button" class="btn btn-info drum-pad" onClick={props.drumAudioQ}>A</button></td>
        <td><button type="button" class="btn btn-info drum-pad" onClick={props.drumAudioQ}>S</button></td>
        <td><button type="button" class="btn btn-info drum-pad" onClick={props.drumAudioQ}>D</button></td>
      </tr>
      <tr>
        <td><button type="button" class="btn btn-info drum-pad" onClick={props.drumAudioQ}>Z</button></td>
        <td><button type="button" class="btn btn-info drum-pad" onClick={props.drumAudioQ}>X</button></td>
        <td><button type="button" class="btn btn-info drum-pad" onClick={props.drumAudioQ}>C</button></td>
      </tr>

  </table>);
}

export default Board;

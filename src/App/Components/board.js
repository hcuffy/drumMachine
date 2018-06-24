import React from 'react';
import './components.css';

const Board = props => {
	return (
		<table className="table">
			<tr>
				<td id="Q" class="drum-pad">
					<button type="button" class="btn btn-info" onClick={props.drumClipQ}>
						Q
					</button>
				</td>
				<td id="W" class="drum-pad">
					<button type="button" class="btn btn-info" onClick={props.drumClipW}>
						W
					</button>
				</td>
				<td id="E" class="drum-pad">
					<button type="button" class="btn btn-info" onClick={props.drumClipE}>
						E
					</button>
				</td>
			</tr>
			<tr>
				<td id="A" class="drum-pad">
					<button type="button" class="btn btn-info" onClick={props.drumClipA}>
						A
					</button>
				</td>
				<td id="S" class="drum-pad">
					<button type="button" class="btn btn-info" onClick={props.drumClipS}>
						S
					</button>
				</td>
				<td id="D" class="drum-pad">
					<button type="button" class="btn btn-info" onClick={props.drumClipD}>
						D
					</button>
				</td>
			</tr>
			<tr>
				<td id="Z" class="drum-pad">
					<button type="button" class="btn btn-info" onClick={props.drumClipZ}>
						Z
					</button>
				</td>
				<td id="X" class="drum-pad">
					<button type="button" class="btn btn-info" onClick={props.drumClipX}>
						X
					</button>
				</td>
				<td id="C" class="drum-pad">
					<button type="button" class="btn btn-info" onClick={props.drumClipC}>
						C
					</button>
				</td>
			</tr>
		</table>
	);
};

export default Board;

import React, {Component} from 'react';
import './ThumbButton.css';
import buttonCover from '../../../../images/button_overlay.png';

class ThumbButton extends Component {
	
	_callback = () =>{
		const newButton = {
			vID: this.props.videoID,
			thumbNum: this.props.thumbNum,
		}
		this.props.callback(newButton)
	}

	render = () => {

		return (
			<div onClick={ this._callback }className='thumbButton'>
			<img className='buttonCover' alt='' src={buttonCover} />
			<img className='buttonImage' alt='' src={`https://img.youtube.com/vi/${this.props.videoID}/${this.props.thumbNum}.jpg`} />
			</div>
		)
	}
}

export default ThumbButton;

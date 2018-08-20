import React, {Component} from 'react';
import './VideoButton.css';
import buttonCover from '../../images/button_overlay.png';

class VideoButton extends Component {
	constructor(props){
		super(props);
		this.props.videoID ? this.videoID = this.props.videoID : this.videoID = 'K8_ad8b1ziw';
		this.props.thumbNum?this.thumbURL= `https://img.youtube.com/vi/${this.videoID}/${this.props.thumbNum}.jpg` : this.thumbURL= `https://img.youtube.com/vi/${this.videoID}/0.jpg`;
	}

	// callback = ()=> { this.props.callback(this.videoID) }

	render = () => {
		return (
			<div onClick={ ()=> this.props.callback(this.videoID) }className='videoButton pointy'>
			<img className='buttonCover' alt='' src={buttonCover} />
			<img className='buttonImage' alt={this.videoID} src={this.thumbURL} />
			</div>
		)
	}
}

export default VideoButton;

// 
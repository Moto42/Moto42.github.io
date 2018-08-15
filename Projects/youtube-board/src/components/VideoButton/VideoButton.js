import React, {Component} from 'react';
import './VideoButton.css'

class VideoButton extends Component {
	constructor(props){
		super(props);
		this.props.videoID ? this.videoID = this.props.videoID : this.videoID = 'K8_ad8b1ziw';
		this.props.thumbNum? this.thumbURL= `https://img.youtube.com/vi/${this.videoID}/${this.props.thumbNum}.jpg` : this.thumbURL= `https://img.youtube.com/vi/${this.videoID}/0.jpg`;
	}

	render = () => {
		return (<div className='videoButton'>
			<img alt={this.videoID} src={this.thumbURL} />
		</div>)
	}
}

export default VideoButton;
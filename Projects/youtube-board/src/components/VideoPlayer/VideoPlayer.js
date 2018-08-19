import React, {Component} from 'react';
import YouTube from 'react-youtube';
import './VideoPlayer.css';

class VideoPlayer extends Component {

	_onStateChange = (event) => {

		switch (event.data){

			case -1: //unstarted
				//Shut off the buttons and render the player window.
				break;

			case 0: //ended
			this.props.killVideo();
				break;

			case 1: //playing
				break;

			case 2: //paused
			this.props.killVideo();
				break;

			case 3: //buffering
				break;

			//case 4: //Not listed in API

			case 5: //video cued
				break;

			default: //This will probably be an error state.
			this.props.killVideo();
			new RangeError(`YouTube embeded player in an unknown state: ${event.data}`)
		}
	}

	render(){
    const opts = {
      width: '100%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 0,
        disablekb:1,
      }

    };
 		
    if(this.props.currentVideo != null){
	    return (<div>
	    	<div className='videoBackground'></div>
	      <YouTube 
	      	className={'videoContainer'}
	        videoId= {this.props.currentVideo}
	        opts={opts}
	        onStateChange={this._onStateChange}
	      />
	    </div>);
    } else {
    	return (
    		<div></div>
    	);
    }

  }
}

export default VideoPlayer;
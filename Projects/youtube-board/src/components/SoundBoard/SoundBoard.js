import React, {Component} from 'react';
import './SoundBoard.css';

class SoundBoard extends Component {

	render(){
		return (<div className='soundBoard'>
			{this.props.children}
		</div>)
	}
}

export default SoundBoard;
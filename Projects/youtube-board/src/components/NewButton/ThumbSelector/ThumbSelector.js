import React, {Component} from 'react';
import ThumbButton from './ThumbButton';
import './ThumbSelector.css';


class ThumbSelector  extends Component {

	render = (props) => {
		
		return (<div className='thumbSelector'>
			<ThumbButton videoID={this.props.vID} thumbNum={1} callback={this.props.submitNewButton} />
			<ThumbButton videoID={this.props.vID} thumbNum={2} callback={this.props.submitNewButton} />
			<ThumbButton videoID={this.props.vID} thumbNum={3} callback={this.props.submitNewButton} />
		</div>)
	}
}
export default ThumbSelector;
import React, { Component } from 'react';
import ThumbSelector from './ThumbSelector';
import './NewButton.css';

class NewButton extends Component {
	constructor () {
		super();

		this.state = {
			vID : 'HiE7FmIKOQ0',
		}
	}

	getVID = (event) => {
		const entered = event.target.value;

		if(entered.includes('youtube.com')){
			//Strip out the vID
			console.log('url entered');
		} 
		this.setState({vID: entered})
	}

	render = () => {
		return (
			<div className='newButtonBackground'>

				<div className='newButton'>
				<input type='text' onChange={this.getVID} />
			
				<ThumbSelector vID={this.state.vID} submitNewButton={this.props.submit} />

				<button onClick={this.props.cancel}>Cancel</button>
				</div>
			
			</div>
		)
	}
}

export default NewButton;
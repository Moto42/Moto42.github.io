import React, { Component } from 'react';
import ThumbSelector from './ThumbSelector';
import './NewButton.css';

class NewButton extends Component {
	constructor () {
		super();

		this.state = {
			vID : '',
		}
	}

	getVID = (event) => {
		let entered = event.target.value;

		if(entered.includes('youtube.com')){
			const vPosition = entered.indexOf('v=');
			let ampPosition = entered.indexOf('&');
			if(ampPosition === -1) { ampPosition = entered.length };
			entered = entered.substring(vPosition+2, ampPosition);
		} 
		this.setState({vID: entered})
	}

	render = () => {
		return (
			<div className='newButtonBackground'>

				<div className='newButton'>
					YouTube VideoID: <input type='text' onChange={this.getVID} />
				
					{this.state.vID !== '' ? <ThumbSelector vID={this.state.vID} submitNewButton={this.props.submit} /> : ''}

					<button className='cancelButton pointy' onClick={this.props.cancel}>Cancel</button>
				</div>
			
			</div>
		)
	}
}

export default NewButton;
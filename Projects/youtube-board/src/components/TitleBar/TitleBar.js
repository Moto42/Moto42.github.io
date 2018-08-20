import React from 'react';
import './TitleBar.css';
import ytLogo from '../../images/yt_icon.png';

const TitleBar = (props) => {
	return(<div className='titleBar'>
		<div className='logo'>
			<img alt= '' src={ytLogo} /><h1>YouTube Soundboard</h1>
		</div>
		<div className='addButtonContainer'>
			<div onClick={props.addButton} className='addButton pointy'>Create <br/> New Button</div>
		</div>
	</div>)
}

export default TitleBar;
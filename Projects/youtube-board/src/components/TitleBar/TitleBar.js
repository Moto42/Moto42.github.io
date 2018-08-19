import React from 'react';
import './TitleBar.css';
import ytLogo from '../../images/yt_icon.png';

const TitleBar = () => {
	return(<div className='titleBar'>
		<img alt= '' src={ytLogo} /><h1>YouTube Soundboard</h1>
	</div>)
}

export default TitleBar;
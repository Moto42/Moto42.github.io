import React from 'react';
import VideoButton from '../VideoButton';
import defaultButtons from '../../data/defaultButtons';

const getVideoButtons = (callback) =>
{
	return defaultButtons.map((buttonInfo)=>{
		return (
			makeNewButton(buttonInfo,callback)
		)
	});
}

const makeNewButton = (buttonInfo,callback) => {
	return (
		<VideoButton callback={callback} videoID={buttonInfo.vID} thumbNum={buttonInfo.thumbNum} />
	);
}


export {
	getVideoButtons,
	makeNewButton,
	}
import React from 'react';
import VideoButton from '../VideoButton';
import defaultButtons from '../../data/defaultButtons';

const getVideoButtons = () =>
{

	return defaultButtons.map((buttonInfo)=>{
		return (
			<VideoButton videoID={buttonInfo.vID} thumnNum={buttonInfo.thumnNum} />
		)
	});
}

export {
	getVideoButtons,
}
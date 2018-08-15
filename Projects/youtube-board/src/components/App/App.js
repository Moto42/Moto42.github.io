import React, { Component } from 'react';

import TitleBar from '../TitleBar';
import SoundBoard from '../SoundBoard';
import Footer from '../Footer';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

import { getVideoButtons } from './logic';


class App extends Component {
  render() {
    return (
      <div className="App">
      	<VideoPlayer />
      	<TitleBar />
      	<SoundBoard>
      		{getVideoButtons()}
      	</SoundBoard>
      	<Footer />
      </div>
    );
  }
}

export default App;

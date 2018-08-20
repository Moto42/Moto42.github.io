import React, { Component } from 'react';

import TitleBar from '../TitleBar';
import SoundBoard from '../SoundBoard';
import Footer from '../Footer';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import NewButton from '../NewButton';

import { getVideoButtons, makeNewButton } from './logic';
import './App.css';



class App extends Component {
  constructor() {
    super();
    this.state = {
      currentVideo: null,
      buttonsList: [],
      displayNewButton: false,
    }
  }

  changeCurrentVideo = (videoID) => {
    this.setState({ currentVideo: videoID });
  }

  cancelNewButton = () => {
    this.setState({displayNewButton: false});
  }

  displayNewButton = () => {
    this.setState({displayNewButton: true});
  }

  submitNewButton = (buttonInfo) =>{
    this.setState({displayNewButton:false});
    const newButtonsList = this.state.buttonsList;
    newButtonsList.push(makeNewButton(buttonInfo,this.changeCurrentVideo));
    this.setState({buttonsList: newButtonsList });
    return true;
  }

  componentDidMount() {
    this.setState({ buttonsList: getVideoButtons(this.changeCurrentVideo) })
  }

  render() {
    return (
      <div className="App">
        <TitleBar addButton={ ()=>{this.setState( {displayNewButton:true} )} } />
        <SoundBoard >
          {this.state.buttonsList}
        </SoundBoard>
        <Footer />
        <VideoPlayer currentVideo={this.state.currentVideo} killVideo={()=>{this.changeCurrentVideo(null)}} />
        {this.state.displayNewButton ? <NewButton submit={this.submitNewButton }cancel={this.cancelNewButton} /> : '' }
      </div>
    );
  }
}

export default App;
